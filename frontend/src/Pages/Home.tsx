import * as React from "react";
import Hero from "../Components/HomeComponents/Hero/Hero.tsx";
import IconSection from "../Components/HomeComponents/IconSection/IconSection.tsx";
import StatsSection from "../Components/HomeComponents/StatsSection/StatsSection.tsx";
import GeneralSection from "../Components/HomeComponents/GeneralSection/GeneralSection.tsx";
import Footer from "../Components/Footer/Footer.tsx";
const Home = () => {
  return (
    <>
      <Hero/>
      <StatsSection />
      <IconSection />
      <GeneralSection />
      <Footer />
    </>
  );
};

export default Home;
