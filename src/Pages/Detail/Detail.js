import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Detail = () => {
  const details = useLoaderData();
  console.log(details);
  const { _id, service_id, rating, price, picture, name, description } =
    details;
  return (
    <div>
      <div className="card card-compact my-9 mx-auto w-3/5 bg-base-100 shadow-xl">
        <figure>
          <img src={picture} alt="Shoes" />
        </figure>
        <div className="card-body bg-pink-400 text-white">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
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
            <button className="btn btn-secondary font-bold">
              <Link to={`/services/${_id}`}>Book Now</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
