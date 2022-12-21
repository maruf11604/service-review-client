import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllServiceDetails = ({ data, refetch }) => {
  console.log(data);
  refetch();
  const { _id, service_id, rating, price, picture, name, description } = data;
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img src={picture} alt="Shoes" />
      </figure>
      <div className="card-body bg-slate-600 text-white">
        <h2 className="card-title">{name}</h2>
        <p>{`${description?.slice(0, 100) + " " + "...."} `}</p>
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
          <button className="btn bg-gradient-to-r from-indigo-500 font-bold">
            <Link to={`/services/${_id}`}>View Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllServiceDetails;
