import PropTypes from 'prop-types';
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
    const { title, price, img } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>
                <p className="text-red-600"><b>Price: ${price}</b></p>
                <div className='flex flex-row justify-end'> <a href={'/'}><FaArrowRight /></a></div>
            </div>


        </div>
    );
};


ServiceCard.propTypes = {
    service: PropTypes.object
}

export default ServiceCard;