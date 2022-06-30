import React from "react";
import Button from "./UX/UI/Button";

const Tab = (props) => {
  const liEl = props.headers.map((tab) =>
    tab === props.activeTab ? (
      <li key={Math.random()} className="py-2 text-sm px-6 bg-white rounded-t-md">
        {props.activeTab}
      </li>
    ) : (
      <li key={Math.random()} className="py-2 text-sm px-6 bg-gray-100">
        {tab}
      </li>
    )
  );

  return (
    <>
      <div>
        <ul className="flex cursor-pointer">{liEl}</ul>
      </div>
      <div className="p-3 border-2 border-white bg-white">
        <div className="">
          <div className="pt-2 border border-gray-100 overflow-hidden rounded-md shadow-sm bg-white hover:shadow-md transition-shadow duration-300 ease-in-out">
            <div className="flex justify-between py-3 px-6">
              {props.topText && (
                <h3 className="font-bold text-md">{props.topText}</h3>
              )}
              {props.buttonText && <Button text={props.buttonText} />}
            </div>
            
            <a href={props.url ? props.url : ""}>
                <div className="px-6">
                  <img
                    src={props.imgUrl}
                    width={120}
                    height={120}
                    alt=""
                  />
                </div>
            </a>

            <div className="w-full px-6">
              <p className="focus:outline-none text-xs mb-6 leading-normal p-2">
                {props.descriptionText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tab;
