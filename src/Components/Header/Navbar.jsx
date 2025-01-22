import React, { useState, useEffect } from "react";
import "./index.css";
import ToggleImg from "../../assets/toggle.svg";
import insulina from "../../assets/Insulina.png";
import insulinaHover from "../../assets/InsulinaHover.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false); 
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {/* Conteneur principal */}
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <img src={insulina} alt="Logo" className="sm:hidden block" />
        
        {/* Bouton Toggle */}
        <button
          className="sm:hidden block text-white"
          onClick={toggleMenu}
        >
          <img src={ToggleImg} alt="Toggle" />
        </button>

        {/* Menu de navigation pour desktop */}
        <ul className="hidden sm:flex sm:space-x-6">
          <li className="nav-item">A propos</li>
          <li className="nav-item">Fonctionnalité</li>
          <li className="nav-item">Article</li>
          <li className="nav-item">FAQ</li>
        </ul>

        {/* Bouton "Contact us" pour desktop */}
        <button className="contact-btn hidden sm:block ml-auto">
          Contact us
        </button>
      </div>

      {/* Menu déroulant pour mobile */}
      {isOpen && (
        <ul className=" top-full left-0 w-full bg-white shadow-md sm:hidden mb-10">
          <li className="nav-item px-4 py-2 border-b">A propos</li>
          <li className="nav-item px-4 py-2 border-b">Fonctionnalité</li>
          <li className="nav-item px-4 py-2 border-b">Article</li>
          <li className="nav-item px-4 py-2 border-b">FAQ</li>
          <li className="contact-nav-item px-4 py-2">Contact us</li>
        </ul>
      )}

      {/* Bouton centré en bas */}
      <div className="relative border-t border-gray-300 mt-2 ">
      <button className="absolute hidden sm:block left-1/2 transform -translate-x-1/2 top-[-30px] bg-white rounded-full border px-10 py-2 group hover:bg-[#2E90B0] transition pb-3">
          <img
            src={insulina}
            alt="Insulina"
            className="group-hover:hidden w-auto h-6"
          />
          <img
            src={insulinaHover}
            alt="Insulina hover"
            className="hidden group-hover:block w-auto h-6"
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
