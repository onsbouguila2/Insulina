import React from "react";
import Logo from "../../assets/Logo.svg";

const Footer = () => {
  return (
    <div className=" text-center text-white py-10 bg-gradient-to-r from-[#2E90B0] to-[#5BB5D2]">
      <img src={Logo} alt="Footer-logo" className="mx-auto" />
      <ul className="flex justify-center gap-4 mt-4">
        <li className="footer-list-item">A propos</li>
        <li className="footer-list-item">Fonctionnalité</li> 
        <li className="footer-list-item">Article</li>
        <li className="footer-list-item">FAQ</li>

      </ul>
    </div>
  );
};

export default Footer;
