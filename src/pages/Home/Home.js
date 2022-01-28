import React from "react";
import HomeMain from "../../components/HomeMain/HomeMain";
import NavBar from "../../components/NavBar/NavBar";
import HomeWhoWeAre from "../../components/HomeWhoWeAre/HomeWhoWeAre";
import HomeDog from "../../components/HomeDog/HomeDog";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HomeMain />
      <HomeWhoWeAre />
      <HomeDog />
      <Footer />
    </div>
  );
}
