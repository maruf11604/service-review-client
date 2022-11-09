import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const ServiceDetail = ({ service }) => {
  console.log(service);
  const { _id, service_id, rating, price, picture, name, description } =
    service;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={picture} alt="Shoes" />
        </figure>
        <div className="card-body bg-pink-400 text-white">
          <h2 className="card-title">{name}</h2>
          <p>{`${description.slice(0, 100) + " " + "...."} `}</p>
          <div className="flex justify-between ">
            <p className="flex items-center font-bold">
              {rating}
              <FaStar className="text-amber-400"></FaStar>
              <FaStar className="text-amber-400"></FaStar>
              <FaStar className="text-amber-400"></FaStar>
              <FaStarHalfAlt className="text-amber-400"></FaStarHalfAlt>
            </p>
            <p className="font-bold">Price: ${price}</p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-secondary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;