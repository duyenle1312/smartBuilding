import React from "react";

const BuildingInfo = (props) => {
  return (
    <>
      <div className="mb-12 w-full gap-x-3 flex">
        <div className="w-full inline-block">
          <div className="h-32 p-2 w-full overflow-hidden rounded-lg shadow-md bg-white">
            <p className="text-xs text-gray-600 p-2">Online Devices</p>
            <div className="px-2 flex items-center">
              <svg
                className="h-2 w-2 block"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 122.88 122.88"
                style={{ enableBackground: "new 0 0 122.88 122.88" }}
                xmlSpace="preserve"
              >
                <style
                  type="text/css"
                  dangerouslySetInnerHTML={{
                    __html:
                      ".st0{fill-rule:evenodd;clip-rule:evenodd;fill:#6BBE66;}",
                  }}
                />
                <g>
                  <path
                    className="st0"
                    d="M61.44,0c33.93,0,61.44,27.51,61.44,61.44c0,33.93-27.51,61.44-61.44,61.44C27.51,122.88,0,95.37,0,61.44 C0,27.51,27.51,0,61.44,0L61.44,0z"
                  />
                </g>
              </svg>
              <p className="text-lg ml-1.5">{props.onlineDevices}</p>
            </div>
          </div>
        </div>
        <div className="w-full inline-block">
          <div className="h-32 p-2 overflow-hidden rounded-lg shadow-md bg-white">
            <p className="text-xs text-gray-600 p-2">Total Devices</p>
            <p className="text-lg text-gray-600 -mt-1 px-2">{props.devices}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuildingInfo;
