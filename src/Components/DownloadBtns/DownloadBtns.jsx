import React from "react";
import googlePlay from "../../assets/googlePlay.png";
import appStore from "../../assets/AppStore.png";

const DownloadBtns = () => {
  return (
    <div className="flex gap-4 mt-4">
      <button className="download-btn hover:bg-gray-700 p-2 rounded-md transition-colors duration-300">
        <a
          href="https://play.google.com/store/apps/details?id=com.example"
        >
          <img src={googlePlay} alt="Get it on" />
        </a>
      </button>
      <button className="download-btn hover:bg-gray-700 p-2 rounded-md transition-colors duration-300">
        <a
          href="https://play.google.com/store/apps/details?id=com.example"
        >
          <img src={appStore} alt="Get it on" />
        </a>
      </button>
    </div>
  );
};

export default DownloadBtns;
