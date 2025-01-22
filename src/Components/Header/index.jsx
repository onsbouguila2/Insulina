import React from "react";
import Navbar from "./Navbar";
import phoneImg from "../../assets/phoneImg.png";
import blueEllipse from "../../assets/blueEllipse.png";
import DownloadBtns from "../DownloadBtns/DownloadBtns";
import yellowEllipse from "../../assets/yellowEllipse.png";
import lightBlueEllipse from "../../assets/light-blue-ellipse.png";
import greenEllipse from "../../assets/green-ellipse.png";
import redEllipse from "../../assets/red-ellipse.png";

const Header = () => {
  return (
    <div className="bg-[#F6F7FA] container px-8 mx-auto relative">
      <Navbar />
      <div className="text-center pt-20">
        <h1 className="header-title">Gérez votre diabète :</h1>
        <h1 className="header-title">
          Entrez vos <span className="text-[#F0332C]">repas </span>
          et ajustez
        </h1>
        <h1 className="header-title">votre dosage insuline</h1>
        <p className="text-lg text-gray-600 mt-6">
          Nous avons créé une application innovante pour aider les personnes
          diabétiques.
        </p>
        <div className="flex justify-center ">
          <DownloadBtns />
        </div>
        <div className="flex justify-center items-center mx-auto pt-5">
          <img
            src={phoneImg}
            alt="phone img"
            className="img-fluid transform transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Blue Ellipse */}
        <div className="absolute bottom-[10rem] left-[0] hidden md:block animate-slowBounce">
          <img src={blueEllipse} alt="blue ellipse" />
        </div>

        {/* Yellow Ellipse */}
        <div className="absolute top-[20rem] right-[0] hidden md:block transform animate-slowBounce">
          <img src={yellowEllipse} alt="yellow ellipse" />
        </div>

        {/* Light Blue Ellipse */}
        <div className="absolute bottom-[20rem] right-[10rem] hidden md:block animate-slowBounce">
          <img src={lightBlueEllipse} alt="light blue ellipse" />
        </div>

        {/* Green Ellipse */}
        <div className="absolute top-[20rem] left-[10rem] hidden md:block animate-slowBounce">
          <img src={greenEllipse} alt="green ellipse" />
        </div>

        {/* Red 1 Ellipse */}
        <div className="absolute top-[10rem] right-[10rem] hidden md:block animate-slowBounce">
          <img src={redEllipse} alt="red ellipse" />
        </div>

        {/* Red 2 Ellipse */}
        <div className="absolute bottom-[20rem] left-[10rem] hidden md:block animate-slowBounce">
          <img src={redEllipse} alt="red ellipse" />
        </div>
      </div>
    </div>
  );
};

export default Header;
