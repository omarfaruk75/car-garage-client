import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingCard from "./BookingCard";
import axios from "axios";


const Booking = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    console.log(url)
    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                console.log(res);
                setBookings(res.data);
            })

        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBookings(data))
    }, [url])


    const handleDelete = id => {
        const proceed = confirm('are u want to delete?');
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remaining = bookings.filter(booking => booking._id !== id)
                        setBookings(remaining)
                    }
                })
        }
    }

    const handleBookingConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const remaining = bookings.find(booking => booking._id === id)
                    remaining.status = 'confirm'
                    const newBooking = [bookings, ...remaining];
                    setBookings(newBooking);
                }
            })

    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                <button className="btn btn-circle btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </th>
                            <th></th>
                            <th>Customer Name: </th>
                            <th>Type of Service</th>
                            <th>Price</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>  <button className="btn btn-outline btn-warning">Confirm</button></th>
                        </tr>
                    </thead>
                    <tbody>

                        {bookings.map(book => <BookingCard key={book._id} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm} book={book}></BookingCard>)}


                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default Booking;