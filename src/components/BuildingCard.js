import React from "react";
import Layout from "./UX/UI/Layout";

const BuildingCard = (props) => {
  const background =
    props.page === "page1"
      ? "mb-6 pt-3 border border-gray-100 overflow-hidden rounded-md shadow-md bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out"
      : "mb-6 pt-3 overflow-hidden bg-transparent";
      
  return (
    <>
      <Layout id={props.id} page={props.page}>
        <div className={background}>
          <div className="p-1 whitespace-nowrap">
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-5 ml-3">
                {props.page === "page1" && (
                  <img src={props.imgUrl} width={60} height={60} alt="" />
                )}
                {props.page === "page2" && (
                  <img src={props.imgUrl} width={89} height={89} alt="" />
                )}
                {props.page === "page3" && (
                  <img src="/images/stack.png" width={89} height={89} alt="" />
                )}
              </div>
              <div className="w-full">
                <div
                  className={
                    props.page === "page1" ? "border-b border-gray-200" : ""
                  }
                >
                  <div className="flex items-start justify-between w-full">
                    <div className="w-full">
                      <p
                        className={`focus:outline-none font-medium leading-5 ${
                          props.page === "page1"
                            ? "text-gray-800 text-lg "
                            : "text-blue-900 text-2xl "
                        }`}
                      >
                        {props.name}
                      </p>
                      <div className="flex items-center py-0.5">
                        {props.page !== "page3" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="12"
                            width="12"
                            viewBox="0 0 48 48"
                          >
                            <path d="M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
                            <path d="M0 0h48v48h-48z" fill="none" />
                          </svg>
                        )}
                        {props.page === "page3" && (
                          <img
                            src="/images/small-building.svg"
                            width={16}
                            height={16}
                            alt=""
                          />
                        )}
                        <p className="focus:outline-none text-sm leading-normal py-2 ml-1 text-gray-500">
                          {props.location}
                        </p>
                      </div>
                    </div>
                    {props.page === "page1" && (
                      <div>
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex pt-1">
                    {props.page !== "page3" && (
                      <div className="flex items-center text-xs leading-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_510_302)">
                            <path
                              d="M7.49485 1.49994C7.43615 1.50072 7.37845 1.51527 7.32639 1.54242L0.201393 5.29242C0.140608 5.32412 0.0896774 5.37189 0.054136 5.43051C0.0185946 5.48914 -0.000197343 5.55638 -0.000197343 5.62494C-0.000197343 5.69349 0.0185946 5.76074 0.054136 5.81936C0.0896774 5.87799 0.140608 5.92575 0.201393 5.95746L7.32639 9.70746C7.38016 9.73568 7.43998 9.75043 7.50071 9.75043C7.56144 9.75043 7.62126 9.73568 7.67503 9.70746L14.8 5.95746C14.8608 5.92575 14.9117 5.87799 14.9473 5.81936C14.9828 5.76074 15.0016 5.69349 15.0016 5.62494C15.0016 5.55638 14.9828 5.48914 14.9473 5.43051C14.9117 5.37189 14.8608 5.32412 14.8 5.29242L7.67503 1.54242C7.61946 1.51343 7.55751 1.49882 7.49485 1.49994V1.49994ZM7.50071 2.29974L13.82 5.62494L7.50071 8.9516L1.18137 5.62494L7.50071 2.29974ZM0.36985 7.49701C0.285314 7.49686 0.203207 7.52527 0.136846 7.57764C0.0704846 7.63001 0.0237629 7.70326 0.00425907 7.78552C-0.0152448 7.86777 -0.00638669 7.9542 0.0293965 8.03079C0.0651797 8.10738 0.125789 8.16964 0.201393 8.20746L7.32639 11.9575C7.38016 11.9857 7.43998 12.0004 7.50071 12.0004C7.56144 12.0004 7.62126 11.9857 7.67503 11.9575L14.8 8.20746C14.8437 8.18457 14.8824 8.1533 14.914 8.11544C14.9456 8.07758 14.9694 8.03387 14.9841 7.9868C14.9988 7.93974 15.0041 7.89024 14.9996 7.84114C14.9952 7.79204 14.9811 7.74429 14.9582 7.70062C14.9353 7.65695 14.9041 7.61822 14.8662 7.58664C14.8283 7.55506 14.7846 7.53124 14.7376 7.51655C14.6905 7.50186 14.641 7.49658 14.5919 7.50102C14.5428 7.50546 14.4951 7.51953 14.4514 7.54242L7.50071 11.2016L0.550026 7.54242C0.494727 7.51241 0.432767 7.49679 0.36985 7.49701V7.49701ZM0.36985 9.74701C0.285314 9.74686 0.203207 9.77527 0.136846 9.82764C0.0704849 9.88001 0.0237632 9.95326 0.00425937 10.0355C-0.0152445 10.1178 -0.00638641 10.2042 0.0293967 10.2808C0.0651799 10.3574 0.125789 10.4196 0.201393 10.4575L7.32639 14.2075C7.38016 14.2357 7.43998 14.2504 7.50071 14.2504C7.56144 14.2504 7.62126 14.2357 7.67503 14.2075L14.8 10.4575C14.8437 10.4346 14.8824 10.4033 14.914 10.3654C14.9456 10.3276 14.9694 10.2839 14.9841 10.2368C14.9988 10.1897 15.0041 10.1402 14.9996 10.0911C14.9952 10.042 14.9811 9.99429 14.9582 9.95062C14.9353 9.90695 14.9041 9.86822 14.8662 9.83664C14.8283 9.80506 14.7846 9.78124 14.7376 9.76655C14.6905 9.75186 14.641 9.74658 14.5919 9.75102C14.5428 9.75546 14.4951 9.76953 14.4514 9.79242L7.50071 13.4516L0.550026 9.79242C0.494727 9.76241 0.432767 9.74679 0.36985 9.74701V9.74701Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_510_302">
                              <rect width="15" height="15" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p className="mx-2">Floors: {props.floors.length}</p>
                      </div>
                    )}

                    <div className="flex items-center text-xs leading-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 19 19"
                        fill="none"
                      >
                        <path
                          d="M6.62963 7.35714C6.62963 8.14143 6.80178 8.88286 7.09526 9.55464L3 13.7857C3 13.7857 3 14.5057 3 15.3929C3 16.28 3.92919 17 5.07407 17H7.14815V14.8571H9.22222V12.7143C9.22222 12.7143 11.6375 12.7143 11.8148 12.7143C14.6791 12.7143 17 10.3164 17 7.35714C17 4.39786 14.6791 2 11.8148 2C8.95052 2 6.62963 4.39786 6.62963 7.35714ZM11.8148 9.5C10.6699 9.5 9.74074 8.54 9.74074 7.35714C9.74074 6.17321 10.6699 5.21214 11.8148 5.21214C12.9607 5.21214 13.8889 6.17214 13.8889 7.35714C13.8889 8.54 12.9607 9.5 11.8148 9.5Z"
                          fill="black"
                        />
                      </svg>
                      <p className="mx-2">Offices: {props.offices}</p>
                    </div>

                    <div className="flex items-center text-xs leading-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                      >
                        <path
                          d="M4.49844 12.3994H6.29844V13.9988C6.29844 14.2181 6.41844 14.4188 6.59844 14.5181C6.69781 14.5781 6.79906 14.5988 6.89844 14.5988C6.99781 14.5988 7.11781 14.5781 7.21906 14.5181L10.8191 12.3188C10.9991 12.1988 11.0984 11.9981 11.0984 11.7994V1.40063C11.0984 1.40063 11.0984 1.40063 11.0984 1.38C11.0984 1.34063 11.0984 1.29938 11.0778 1.26C11.0778 1.26 11.0778 1.26 11.0778 1.23938V1.21875C11.0572 1.17938 11.0572 1.13813 11.0384 1.09875C11.0384 1.09875 11.0384 1.07813 11.0178 1.07813C10.9972 1.03875 10.9578 0.9975 10.9372 0.97875L10.9166 0.958125C10.8772 0.91875 10.8566 0.898125 10.8172 0.8775C10.7778 0.856875 10.7366 0.838125 10.6766 0.8175H10.6559C10.5753 0.796875 10.5359 0.796875 10.4966 0.796875H4.49844C4.15906 0.796875 3.89844 1.0575 3.89844 1.39688V11.7975C3.89844 12.1406 4.15906 12.3994 4.49844 12.3994ZM7.49844 3.93938L9.89844 2.47875V11.4788L7.49844 12.9394V3.93938Z"
                          fill="black"
                        />
                      </svg>
                      <p className="mx-2">Rooms: {props.rooms}</p>
                    </div>
                    {props.page === "page1" && (
                      <div className="flex">
                        <div className="text-xs leading-3 flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            enableBackground="new 0 0 52 52"
                            id="Layer_1"
                            version="1.1"
                            viewBox="0 0 52 52"
                            xmlSpace="preserve"
                            className="w-3 h-3"
                          >
                            <g>
                              <rect height={2} width={7} x={42} y="12.5" />
                              <rect height={2} width={7} x={42} y="17.5" />
                              <rect height={2} width={7} x={42} y="22.5" />
                              <rect height={2} width={7} x={42} y="27.5" />
                              <rect height={2} width={7} x={42} y="32.5" />
                              <rect height={2} width={7} x={42} y="37.5" />
                              <path d="M39.5,3h-2v6.9996338h-3V3h-2v6.9996338h-3V3h-2v6.9996338h-3V3h-2v6.9996338h-3V3h-2v6.9996338h-3V3h-2v6.9996338   H9.9986572V12.5H3v2h6.9986572v3H3v2h6.9986572v3H3v2h6.9986572v3H3v2h6.9986572v3H3v2h6.9986572v3H3v2h6.9986572v2.4996338h32v-32   H39.5V3z M13.2929688,14.7070313l1.4140625-1.4140625l1.4306641,1.4301758l-1.4140625,1.4140625L13.2929688,14.7070313z    M32.9986572,36.4996338h-14c-1.6499634,0-3-1.3499756-3-3v-14c0-1.6499634,1.3500366-3,3-3h14c1.6600342,0,3,1.3500366,3,3v14   C35.9986572,35.1496582,34.6586914,36.4996338,32.9986572,36.4996338z M37.2929688,38.7070313l-1.4296875-1.4296875   l1.4140625-1.4140625l1.4296875,1.4296875L37.2929688,38.7070313z" />
                              <rect height={7} width={2} x="37.5" y={42} />
                              <rect height={7} width={2} x="32.5" y={42} />
                              <rect height={7} width={2} x="27.5" y={42} />
                              <rect height={7} width={2} x="22.5" y={42} />
                              <rect height={7} width={2} x="17.5" y={42} />
                              <rect height={7} width={2} x="12.5" y={42} />
                            </g>
                          </svg>
                          <p className="mx-2">Devices: {props.devices}</p>
                        </div>

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
                            style={{
                              enableBackground: "new 0 0 122.88 122.88",
                            }}
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
                          <div className="py-2 px-2 text-xs leading-3 text-green-600">
                            Online Services: {props.onlineDevices}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {props.page === "page1" && (
                    <div className="flex pt-2.5 px-2">
                      <svg
                        className="w-4 h-4"
                        stroke="gray"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title />
                        <g data-name="1" id="_1">
                          <path d="M202.1,450a15,15,0,0,1-10.6-25.61L365.79,250.1,191.5,75.81A15,15,0,0,1,212.71,54.6l184.9,184.9a15,15,0,0,1,0,21.21l-184.9,184.9A15,15,0,0,1,202.1,450Z" />
                        </g>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default BuildingCard;
