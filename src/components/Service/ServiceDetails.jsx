import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SelectedServiceCard from "./SelectedServiceCard";

const ServiceDetails = () => {
    const [selectService, setSelectService] = useState([]);
    const {id} = useParams()
    const [serviceCard,setServiceCard] =useState([]);

    useEffect(()=>{
        fetch('/servicesData.json')
        .then(res=>res.json())
        .then(data=>setServiceCard(data))
    },[])
    // console.log(id,serviceCard);
    useEffect(() => {
        const findSelectedCard = serviceCard?.find(service => service.id == id)
        setSelectService(findSelectedCard);
    }, [id, serviceCard])
    console.log(selectService)

    return (
        <div>
           <SelectedServiceCard selectService={selectService}></SelectedServiceCard>
        </div>
    );
};

export default ServiceDetails;