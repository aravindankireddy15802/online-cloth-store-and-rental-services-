import React from "react";
import Category from "./category";
import Offer from "./offer";
import Suit from "./suitTemplate";
import Footer from "./footer";
import Hero from "./hero"
import Marquee from "./marque";


const Home = () => {
  return (
    <>
      <Hero />
      <Marquee />
      <Category />
      <Suit />
      <Offer />
      <Footer />
    </>
  );
};

export default Home;
