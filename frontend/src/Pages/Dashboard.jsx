import React from "react";
import ResignationForm from "../components/ResignationForm";
import ResignationList from "../components/ResignationList";

const Dashboard = () => {
  return (
    <div>
      <h1>Employee Dashboard</h1>
      <ResignationForm />
      <ResignationList />
    </div>
  );
};

export default Dashboard;