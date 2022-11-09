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
    <div className=" py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:ml-16  gap-12 ">
      {services.map((service) => (
        <ServiceDetail key={service._id} service={service}></ServiceDetail>
      ))}
    </div>
  );
};

export default Services;
