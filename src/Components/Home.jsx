import React from "react";
import HeroSection from "./Hero/Hero_Comp";
import Hero_Comp2 from "./Hero/Hero_Comp2";
import FeatureSection from "./Hero/Feature_Comp";

const Home = () => {
  return (
    <>
      {/* <div>Home</div> */}
      <HeroSection />
      <Hero_Comp2 />
      <FeatureSection />
    </>
  );
};

export default Home;
