import { useEffect } from "react";
import { useState } from "react";
import SeviceCard from "./SeviceCard";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('../../../public/services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className="mt-4">
            <div>
                <h3 className="text-md text-red-500 font-bold">CRISPY, EVERY BITE TASTE</h3>
                <h2 className="text-6xl font-bold">POPULAR FOOD ITEMS</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {
                services.map(service => <SeviceCard
                key={service.id}
                service={service}
                ></SeviceCard>    )
              }
            </div>
        </div>
    );
};

export default Services;