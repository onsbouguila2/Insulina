import React from "react";

const FeatureCard = ({ feature }) => {
  return (
    <div className="flex flex-col items-center text-center w-full max-w-xs">
      <img
        src={feature.img}
        alt={feature.title}
        className="w-full h-auto mb-4 transform transition duration-300 hover:scale-105"
      />
      <div className="text-left w-full">
        <h3 className="feature-title mb-2">{feature.title}</h3>
        <p className="feature-content">{feature.content}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
