import React from "react";
import ResignationForm from "../components/ResignationForm";
import ResignationList from "../components/ResignationList";

const Dashboard = () => {
  const token = localStorage.getItem("token");

  return (
    <div>
      <h1>Dashboard</h1>
      <ResignationForm token={token} />
      <ResignationList token={token} />
    </div>
  );
};

export default Dashboard;