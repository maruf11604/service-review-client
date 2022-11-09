import React from "react";
import { useLoaderData } from "react-router-dom";

const Detail = () => {
  const details = useLoaderData();
  console.log(details);
  return <div>{details.name}</div>;
};

export default Detail;
