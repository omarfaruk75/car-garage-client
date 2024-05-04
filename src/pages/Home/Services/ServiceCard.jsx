import PropTypes from 'prop-types';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, title, price, img } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>
                <p className="text-red-600"><b>Price: ${price}</b></p>
                <div className='flex flex-row justify-end'> <Link to={`/checkout/${_id}`}><FaArrowRight /></Link></div>
            </div>


        </div>
    );
};


ServiceCard.propTypes = {
    service: PropTypes.object
}

export default ServiceCard;