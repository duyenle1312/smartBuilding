import React from "react";
import { useParams } from "react-router-dom";
import BuildingInfo from "../components/BuildingInfo";
import BackButton from "../components/UX/UI/BackButton";
import Button from "../components/UX/UI/Button";
import Tab from "../components/Tab";
import BuildingCard from "../components/BuildingCard";
import data from "../data";

const Page2 = () => {
  const { buildingId } = useParams();

  const cardInfo = {
    name: data[buildingId - 1].name,
    location: data[buildingId - 1].location,
    offices: data[buildingId - 1].offices,
    rooms: data[buildingId - 1].rooms,
    floors: data[buildingId - 1].floors,
    devices: data[buildingId - 1].devices,
    onlineDevices: data[buildingId - 1].onlineDevices,
    imgUrl: "/images/commercial-building.svg",
  };

  const tabInfo = {
    headers: [
      "All Devices",
      "Floors",
      "Apartments",
      "Rooms",
      "Manage Devices",
      "User Management",
    ],
    buttonText: "+ Create new floor",
    topText: `Floors (${data[buildingId - 1].floors.length})`,
    descriptionText: "There are no floors created for this building",
    imgUrl: "/images/add-a-floor.png",
    url: `/floor/${buildingId}/1`,
  };

  return (
    <>
      <div className="px-16 py-8 bg-gray-100 h-full">
        <div className="flex justify-between items-center">
          <BackButton />
          <Button text="Edit Building" />
        </div>
        <div className="flex justify-between p-3">
          <h3 className="text-lg">Building Dashboard</h3>
        </div>
        <BuildingCard page="page2" {...cardInfo} />
        <BuildingInfo
          devices={cardInfo.devices}
          onlineDevices={cardInfo.onlineDevices}
        />
        <Tab {...tabInfo} activeTab="Floors" />
      </div>
    </>
  );
};

export default Page2;