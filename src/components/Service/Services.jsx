/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Services = ({ service }) => {
    const {id,service_name,image,price,description} =service;
    return (
        <div >
            <div className="card w-full  md:w-96 h-[430px] bg-base-100 shadow-xl" data-aos="fade-up"
        data-aos-duration="1000">
                <figure className="px-10 pt-10">
                    <img src={image} alt="image" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-[#FF444A] text-xl">{service_name}</h2>
                    <p className="text-[#333333]">{description.slice(0,150)}..</p>
                    <div className="flex gap-12 items-center ">
                        <p>Price: <span className="text-[#FF444A] font-semibold">{price}</span></p>
                    <Link to={`/service/${id}`}><button className="btn bg-slate-100 text-[#FF444A] capitalize text-lg">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
