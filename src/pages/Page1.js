import React from "react";
import Button from "../components/UX/UI/Button";
import Home from "../components/Home"
import BuildingCard from ".././components/BuildingCard";
import data from "../data";

const Page1 = () => {
  return (
    <div className="px-16 py-8">
      <Home />
      <div className="flex justify-between mt-6">
        <h3 className="text-xl">{`Building (${data.length})`}</h3>
        <Button text="+ Create new building" />
      </div>
      {data.map(building => <BuildingCard page="page1" {...building} />)}
    </div>
  );
};

export default Page1;
