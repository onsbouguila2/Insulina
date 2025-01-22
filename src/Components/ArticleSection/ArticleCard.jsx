import React from "react";
import dateIcon from "../../assets/dateIcon.svg";

const ArticleCard = ({ article, index }) => {
  const isEvenIndex = index % 2 === 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 items-center w-full max-w-6xl mx-auto p-5 gap-4">
      {/* Image Column */}
      <div
        className={`col-span-12 lg:col-span-4 ${isEvenIndex ? "lg:order-1" : "lg:order-2"}`}
      >
        <img
          src={article.img}
          alt={article.title}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      {/* Text Column */}
      <div
        className={`col-span-12 lg:col-span-7 ${isEvenIndex ? "lg:order-2" : "lg:order-1"} text-left`}
      >
        <h3 className="mb-2 card-title">{article.title}</h3>
        <div className="flex items-center space-x-2 mb-4">
          <img src={dateIcon} alt="dateIcon" className="w-5 h-5" />
          <p className="text-sm text-gray-500">{article.date}</p>
        </div>
        <p className="text-gray-600 text-sm">{article.content}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
