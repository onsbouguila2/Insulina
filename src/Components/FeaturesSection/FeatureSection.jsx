import React from "react";
import FeatureCard from "./FeatureCard";
import feature1 from "../../assets/feature1.png";
import feature2 from "../../assets/feature2.png";
import feature3 from "../../assets/feature3.png";

const FeatureSection = () => {
  const features = [
    {
      img: feature1,
      title: "Add meal lorem ipsum dolor sit amet",
      content:
        "Easily find a comprehensive range of topics including design, development, and more.",
    },
    {
      img: feature2,
      title: "Track progress lorem ipsum dolor sit amet",
      content:
        "Track your progress over time with powerful analytics and personalized insights.",
    },
    {
      img: feature3,
      title: "Stay connected lorem ipsum dolor sit amet",
      content:
        "Connect with experts and community members to achieve your health goals.",
    },
  ];

  return (
    <div className="container mx-auto px-10 py-12 text-center bg-[#F6F7FA]">
      {/* Section Title */}
      <p className="text-lg font-semibold card-subtitle">
        Fonctionnalités
      </p>
      <h1 className="text-3xl max-w-xxl mx-auto text-center font-bold mb-8 section-title pt-3 leading-tight">
        Soutenir vos objectifs de santé <br />
        et de bien être à chaque étape
      </h1>
      {/* Features Grid */}
      <div className="w-full max-w-screen-xl mx-auto px-10 py-5">
        <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center">
          {features.map((feature, index) => (
            <div className="w-full max-w-sm">
              <FeatureCard key={index} feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
