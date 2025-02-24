import React, { useEffect, useState } from "react";
import { getAllResignations, getUserResignations } from "../services/api";

const ResignationList = ({ token }) => {
  const [resignations, setResignations] = useState([]);

  useEffect(() => {
    const fetchResignations = async () => {
      try {
        const response = await getUserResignations(token);
        setResignations(response.data.data);
      } catch (error) {
        console.error("Error fetching resignations:", error);
      }
    };
    fetchResignations();
  }, [token]);

  return (
    <div>
      <h2>Your Resignations</h2>
      {resignations.map((resignation) => (
        <div key={resignation._id}>
          <p>Last Working Day: {resignation.lwd}</p>
          <p>Reason: {resignation.reason}</p>
          <p>Status: {resignation.status}</p>
        </div>
      ))}
    </div>
  );
};

export default ResignationList;