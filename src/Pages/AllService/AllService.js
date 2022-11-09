import React from "react";
import { useLoaderData } from "react-router-dom";
import AllServiceDetails from "../AllServiceDetails/AllServiceDetails";

const AllService = () => {
  const alldata = useLoaderData();
  // console.log(alldata);
  return (
    <div
      class="grid lg:grid-cols-3 sm:grid-cols-1  
                      py-6"
    >
      <div className="col-span-2">
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
          {alldata.map((data) => (
            <AllServiceDetails key={data._id} data={data}></AllServiceDetails>
          ))}
        </div>
      </div>

      <div className="col-span-1">
        <h1 className="text-center font-bold text-3xl">Review</h1>
      </div>
    </div>
  );
};

export default AllService;
