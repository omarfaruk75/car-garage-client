

const BookingCard = ({ book, handleDelete, handleBookingConfirm }) => {
    const { customerName, _id, img, price, date, status, phone, service, email } = book;


    return (

        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="w-24 rounded-xl">
                            <img src={img} />
                        </div>
                    </div>

                </div>
            </td>
            <td>
                {customerName}
            </td>
            <td>{service}</td>
            <td>{price}</td>
            <td>{email}</td>
            <td>{date}</td>
            <td>
                {
                    status === 'confirm' ? <span className="text-primary font-bold">Confirmed</span> : <button onClick={() => handleBookingConfirm(_id)} className="btn btn-outline btn-ghost">Please Confirm</button>
                }
            </td>

        </tr >


    );
};

export default BookingCard;