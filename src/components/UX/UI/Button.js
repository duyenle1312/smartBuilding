import React from "react";

const Button = (props) => {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className="text-white shadow-lg hover:shadow-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br dark:focus:ring-blue-800 font-medium rounded-3xl text-xs px-5 py-2.5 text-center mr-2 mb-2 transition-shadow duration-500 ease-in-out"
    >
      {props.text}
    </button>
  );
};

export default Button;
