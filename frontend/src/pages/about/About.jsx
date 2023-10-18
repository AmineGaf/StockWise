import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { detail } from "./about.constant";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#0688b0]">
      <Link to="/" className="mb-8">
        <img
          src={logo}
          alt="StockWise Logo"
          className="w-32 h-32 cursor-pointer"
        />
      </Link>
      <h1 className="text-4xl font-bold text-white mb-8">About StockWise</h1>
      <p className="text-lg text-white text-center mb-16">
       {detail}
      </p>
      <p className="text-lg text-white text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis urna
        quam. Ut id orci dignissim, ullamcorper lectus vel, feugiat nunc. Nulla
        facilisi. Mauris non libero id leo faucibus rhoncus. Sed ut magna
        auctor, tincidunt nulla id, efficitur nisi. Aliquam auctor nisl ut justo
        tincidunt, id ornare libero eleifend. Sed porttitor fermentum justo, ut
        efficitur nunc rutrum sed. Fusce vitae congue nisl. In rutrum justo in
        sapien efficitur efficitur. Donec pulvinar, justo vel efficitur gravida,
        purus urna tristique lectus, nec semper ligula purus nec lectus. Morbi
        in purus sem. Nullam eu tempus arcu.
      </p>
    </div>
  );
};

export default AboutPage;
