import { useLoaderData } from "react-router-dom";
import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner"
import Review from "../../components/Review/Review";
import Services from "../../components/Service/Services";
const Home = () => {
    const servicesData=useLoaderData();
    console.log(servicesData);
    return (
        <div>
            <Banner></Banner>
            <div className="mt-6">
                <h1 className="text-3xl text-center font-semibold"><span className="text-[#FF444A] text-3xl">Service</span> We <span className="text-[#FF444A] text-3xl">Offer</span></h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    servicesData.map(service => <Services key={service.id} service={service}></Services>)
                }
                </div>
                
            </div>

            <About></About>
            <Review></Review>
        </div>
    );
};

export default Home;