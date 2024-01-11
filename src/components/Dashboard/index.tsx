import React from "react";
import UserCard from "./UserCard";
import CardInfos from "./CardInfos";

const Dashboard = () => {
  return (
    <div className="sm:pl-10 sm:pr-[10px] mt-12">
      <UserCard />
      <CardInfos />
    </div>
  );
};

export default Dashboard;
