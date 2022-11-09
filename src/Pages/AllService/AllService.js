import React from "react";
import { useLoaderData } from "react-router-dom";

const AllService = () => {
  const alldata = useLoaderData();
  console.log(alldata);
  return (
    <div>
      <p>data:{alldata.length}</p>
    </div>
  );
};

export default AllService;
