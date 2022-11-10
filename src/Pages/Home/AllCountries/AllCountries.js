import React from "react";

const AllCountries = () => {
  return (
    <div>
      <div>
        <h1 className="text-center font-bold text-2xl">
          All our service place
        </h1>
      </div>
      <div className="grid lg:grid-cols-6 sm:grid-cols-1 gap-4 py-6">
        <button className=" btn btn-secondary">Bangladesh</button>
        <button className=" btn btn-secondary">India</button>
        <button className=" btn btn-secondary">nepal</button>
        <button className=" btn btn-secondary">Thailand</button>
        <button className=" btn btn-secondary">China</button>
        <button className=" btn btn-secondary">Pakistan</button>
      </div>
    </div>
  );
};

export default AllCountries;
