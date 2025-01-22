import React from "react";
import phoneApp from "../../assets/PhoneApp.png";
import DownloadBtns from "../DownloadBtns/DownloadBtns";
import MobileApp from "../../assets/MobileApp.png";

const DownloadSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container w-[80%] mx-5  bg-gradient-to-r from-[#2E90B0] to-[#5BB5D2] rounded-lg ">
        <div className="flex flex-col-reverse md:flex-row items-center">
          {/* Left Column */}
          <div className="flex-1 text-white space-y-4 mb-6 md:mb-0 px-10">
            <p className="text-2xl card-download-title">Download Insulina App</p>
            <p className="text-sm download-card-conten">
              Ed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vita.
            </p>
            <DownloadBtns />
          </div>

          {/* Right Column - For Mobile, show MobileApp and on larger screens, show phoneApp */}
          <div className="flex-1">
            {/* Image for Mobile */}
            <img
              src={MobileApp}
              className="w-full mx-auto md:hidden"
              alt="MobileApp"
            />
            {/* Image for larger screens */}
            <img
              src={phoneApp}
              className="w-full mx-auto hidden md:block m-0"
              alt="phoneApp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
