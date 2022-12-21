import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceDetail from "./ServiceDetail";

const Services = () => {
  // const [services, setServices] = useState([]);
  const { data: services = [], refetch } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await fetch(
        "https://service-review-assignment-server-mocha.vercel.app/services"
      );
      const data = await res.json();
      return data;
    },
  });
  // useEffect(() => {
  //   fetch("https://service-review-assignment-server-mocha.vercel.app/services")
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, []);
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">Service</h1>
      <div className=" py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-12 ">
        {services.map((service) => (
          <ServiceDetail
            refetch={refetch}
            key={service._id}
            service={service}
          ></ServiceDetail>
        ))}
      </div>
      <div className="text-center">
        <button className=" my-4 bg-gradient-to-r from-indigo-500  btn  font-bold">
          {" "}
          <Link to="/allservice">see All</Link>
        </button>
      </div>
    </div>
  );
};

export default Services;
