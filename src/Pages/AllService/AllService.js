import React from "react";
import { useLoaderData } from "react-router-dom";
import AllServiceDetails from "../AllServiceDetails/AllServiceDetails";

const AllService = () => {
  const alldata = useLoaderData();
  // console.log(alldata);
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 py-9">
      {alldata.map((data) => (
        <AllServiceDetails key={data._id} data={data}></AllServiceDetails>
      ))}
    </div>
  );
};

export default AllService;
