import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const CheckOut = () => {
    const service = useLoaderData();
    const { _id, title, img, price, service_id } = service;
    const { user } = useContext(AuthContext);
    const handleBookService = e => {
        e.preventDefault();
        const form = e.target;
        const fname = form.fname.value;
        const date = form.date.value;
        const phone = form.phone.value;

        const email = user?.email;
        const booking = {
            customerName: fname,
            email,
            date,
            phone,
            img,
            service: title,
            service_id,
            price: price

        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': "application/json",
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => console.log(data));


    }
    return (
        <div className="bg-base-200 ">
            <div className="p-16">
                <h2 className="text-2xl text-center pb-6">Book Service: <b>{title}</b></h2>
                <form onSubmit={handleBookService}>
                    {/* form name and quantity row */}
                    <div className="md:flex gap-6 mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="input-group">
                                <input type="text" name="fname" defaultValue={user?.dislayName} placeholder="Full Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ">
                            <label className="input-group">
                                <input type="date" name="date" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form supplier row */}
                    <div className="md:flex gap-6 mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="input-group">
                                <input type="text" name="phone" placeholder="Your Phone Number" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ">
                            <label className="input-group">
                                <input type="email" name="email" defaultValue={user?.email} placeholder="Your Email Id" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-8 mr-6">

                        <div className="form-control md:w-1/2 ">
                            <label className="input-group">
                                <input type="text" name="dueAmount" placeholder="price" defaultValue={"$" + price} className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form category and details row */}

                    {/* form Photo url row */}
                    <div className="mb-8">
                        <div className="form-control w-full">

                            <textarea name="details" placeholder="Write Your Message" className=" w-full rounded-lg pl-4 pt-4" id="" cols="30" rows="10"></textarea>

                        </div>
                    </div>
                    <input type="submit" value="Order Confirm" className="btn btn-block bg-[#ff3811] text-white" />

                </form>
            </div>
        </div>
    );
};

export default CheckOut;