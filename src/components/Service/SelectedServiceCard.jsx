/* eslint-disable react/prop-types */

const SelectedServiceCard = ({selectService}) => {
    const { service_name,image,venue, description, price } = selectService || {}

    return (
        <div >
            <div className="card max-w-[380px] mx-auto flex justify-center items-center bg-base-100 shadow-xl mb-4">
                <figure className="px-10 pt-10">
                    <img src={image} alt="images" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center ">
                    <h2 className="card-title text-[#FF444A] text-2xl font-semibold">{service_name}</h2>
                    <p className="text-[#333333] max-w-[380px]  text-justify">{description}</p>
                    <p>Price: <span className="text-[#FF444A] font-semibold">{price}</span></p>
                    <p>Venue: <span className="text-[#FF444A] font-semibold">{venue}</span></p>
                </div>
            </div>
        </div>
    );
};

export default SelectedServiceCard;