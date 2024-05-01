import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServices(data)
            })
    }, []);

    return (
        <div>
            <div className="text-center">
                <h3 className="text-xl text-[#ff3811]">Services</h3>
                <h1 className="text-[45px] font-bold">Our Service Area</h1>
                <p className="text-[#737373] w-3/5 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>

            </div>

            <div className="grid grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>


        </div>
    );
};

export default Services;