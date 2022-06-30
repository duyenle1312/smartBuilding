import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="inline-flex bg-gray-200 hover:bg-gray-300 duration-300 ease-in-out p-1 pr-2 rounded-xl"
    >
      <div className="flex items-center">
        <svg
          className="w-4 h-4"
          stroke="gray"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title />
          <g data-name="1" id="_1">
            <path d="M353,450a15,15,0,0,1-10.61-4.39L157.5,260.71a15,15,0,0,1,0-21.21L342.39,54.6a15,15,0,1,1,21.22,21.21L189.32,250.1,363.61,424.39A15,15,0,0,1,353,450Z" />
          </g>
        </svg>
      </div>
      <p className="text-xs ml-1">BACK</p>
    </button>
  );
};

export default BackButton;
