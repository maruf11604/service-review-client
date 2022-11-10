import React from "react";
import img1 from "../../../assects/image/pict.jpg";
import img2 from "../../../assects/image/pict1.jpg";

const Special = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-2xl">Special offers</h1>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5 py-5">
        <div className="card w-full bg-base-100 shadow-xl image-full">
          <figure>
            <img src={img1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Students</h2>
            <p>
              If you are a student ,it is time to travel we are offering 50%
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl image-full">
          <figure>
            <img src={img2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">couples</h2>
            <p>
              If you are a couple ,it is time to travel we are offering 50% for
              laxarury room for you.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Special;
