import React from "react";
import Header from "../sections/Header";
import Banner from "../sections/Banner";
import ListComponents from "../sections/ListComponents";

const HomePage = () => {
  return (
    <div className="bg-[#0f172a] min-h-[100vh] min-w-[100vw] px-[10%] text-white overflow-hidden">
      <Header></Header>
      <Banner></Banner>
      <ListComponents></ListComponents>
    </div>
  );
};

export default HomePage;
