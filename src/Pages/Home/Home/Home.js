import React from "react";
import AllCountries from "../AllCountries/AllCountries";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Special from "../Special/Special";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <AllCountries></AllCountries>
      <Special></Special>
    </div>
  );
};

export default Home;
