import React, { useEffect, useState } from "react";
import ServiceDetail from "./ServiceDetail";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">Service</h1>
      <div className=" py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-12 ">
        {services.map((service) => (
          <ServiceDetail key={service._id} service={service}></ServiceDetail>
        ))}
      </div>
    </div>
  );
};

export default Services;
