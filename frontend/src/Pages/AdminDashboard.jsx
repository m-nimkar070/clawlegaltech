import React, { useEffect, useState } from "react";
import { getAllResignations, concludeResignation } from "../services/api";

const AdminDashboard = () => {
  const [resignations, setResignations] = useState([]);

  useEffect(() => {
    const fetchResignations = async () => {
      const token = localStorage.getItem("token");
      const response = await getAllResignations(token);
      setResignations(response.data.data);
    };
    fetchResignations();
  }, []);

  const handleApproveReject = async (resignationId, approved, lwd) => {
    const token = localStorage.getItem("token");
    await concludeResignation(resignationId, approved, lwd, token);
    alert(`Resignation ${approved ? "approved" : "rejected"}`);
    window.location.reload(); // Refresh the page to update the list
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Last Working Day</th>
            <th>Reason</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {resignations.map((resignation) => (
            <tr key={resignation._id}>
              <td>{resignation.employeeId.username}</td>
              <td>{resignation.lwd}</td>
              <td>{resignation.reason}</td>
              <td>{resignation.status}</td>
              <td>
                <button
                  onClick={() =>
                    handleApproveReject(resignation._id, true, resignation.lwd)
                  }
                >
                  Approve
                </button>
                <button
                  onClick={() =>
                    handleApproveReject(resignation._id, false, resignation.lwd)
                  }
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;