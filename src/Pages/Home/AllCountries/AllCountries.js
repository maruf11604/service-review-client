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
        <button className=" btn bg-gradient-to-r from-indigo-500">
          Bangladesh
        </button>
        <button className=" btn bg-gradient-to-r from-indigo-500">India</button>
        <button className=" btn bg-gradient-to-r from-indigo-500">nepal</button>
        <button className=" btn bg-gradient-to-r from-indigo-500">
          Thailand
        </button>
        <button className=" btn bg-gradient-to-r from-indigo-500">China</button>
        <button className=" btn bg-gradient-to-r from-indigo-500">
          Pakistan
        </button>
      </div>
    </div>
  );
};

export default AllCountries;
