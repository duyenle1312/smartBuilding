import React from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/UX/UI/BackButton";
import Button from "../components/UX/UI/Button";
import Tab from "../components/Tab";
import BuildingCard from "../components/BuildingCard";
import data from "../data";

const Page3 = () => {
  const { buildingId, floorId } = useParams();

  const cardInfo = {
    name: data[buildingId - 1].floors[floorId - 1].name,
    location: data[buildingId - 1].name,
    offices: data[buildingId - 1].offices,
    rooms: data[buildingId - 1].rooms,
    imgUrl: "/images/smalls-building.svg",
  };

  const tabInfo = {
    headers: ["All Devices", "Offices", "Manage Devices", "User Management"],
    descriptionText: "There are no devices assigned to this building",
    imgUrl: "/images/add-a-device.png",
  };

  return (
    <>
      <div className="px-16 py-8 bg-gray-100 h-full h-screen">
        <div className="flex justify-between items-center">
          <BackButton />
          <Button text="Edit Floor" />
        </div>
        <div className="flex justify-between p-3">
          <h3 className="text-lg">Floor Dashboard</h3>
        </div>
        <BuildingCard page="page3" {...cardInfo} />
        <Tab {...tabInfo} activeTab="Offices" />
      </div>
    </>
  );
};

export default Page3;
