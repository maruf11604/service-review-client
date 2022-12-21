import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLoaderData } from "react-router-dom";
import AllServiceDetails from "../AllServiceDetails/AllServiceDetails";

const AllService = () => {
  const {
    data: alldata = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["allservices"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/allservices`);
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    <span>Loading...</span>;
  }
  // const alldata = useLoaderData();
  // console.log(alldata);
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 py-9">
      {alldata.map((data) => (
        <AllServiceDetails
          key={data._id}
          data={data}
          refetch={refetch}
        ></AllServiceDetails>
      ))}
    </div>
  );
};

export default AllService;
