import React, { useState } from "react";
import openIcon from "../../assets/openIcon.png";
import closeIcon from "../../assets/closeIcon.png";

const Faq = () => {
  const faqList = [
    {
      question: "01. What is Insulina?",
      answer:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,?",
      answer:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container w-full md:w-[87%] ml-auto px-10 py-12 text-left rounded-tl-[10px] rounded-bl-[10px] bg-[#F6F7FA]">
      <p className="text-xl font-semibold text-[#192252] my-3">FAQ</p>
      <h1 className="card-title text-3xl font-bold mb-6">
        Frequently asked questions
      </h1>

      <div className="space-y-6">
        {faqList.map((item, index) => (
          <div
            key={index}
            className=" p-6 rounded-lg  hover:shadow-md transition-shadow duration-300"
          >
            <div
              className={`flex items-center justify-between cursor-pointer ${
                activeIndex === index ? "text-[#2E90B0]" : "text-[#192252]"
              }`}
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="text-[14px] md:text-xl font-semibold">
              {item.question}</h3>
              <img
                src={activeIndex === index ? closeIcon : openIcon}
                alt={activeIndex === index ? "Close" : "Open"}
                className="w-[40px] h-[40px]"
              />
            </div>
            {activeIndex === index && (
              <p className="text-[#192252] text-[14px] md:text-xl mt-3 pe-10">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
