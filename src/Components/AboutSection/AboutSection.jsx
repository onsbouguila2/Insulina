import React from "react";
import DownloadBtns from "../DownloadBtns/DownloadBtns";
import aboutImg from "../../assets/aboutImg.png";
const AboutSection = () => {
  return (
    <div className=" px-5">
      <div className="section py-10 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <img
              src={aboutImg}
              alt="aboutImg"
              className="w-full max-w-md h-auto mx-auto"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <p className="text-lg font-semibold text-[#192252] card-subtitle">
              À propos
            </p>
            <h1 className="text-3xl font-bold mb-4 section-title pt-5">
              À propos d’Insulina
            </h1>
            <p className="text-[#192252] mb-6 card-content ">
              Nous avons créé une application innovante pour aider les personnes
              diabétiques à mieux gérer leur insuline. En entrant vos repas,
              vous recevez des recommandations personnalisées pour ajuster votre
              dosage en toute simplicité. Notre mission est de rendre la gestion
              du diabète plus facile et plus sûre, grâce à la technologie.
            </p>
            <DownloadBtns />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
