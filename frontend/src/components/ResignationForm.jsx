import React, { useState } from "react";
import { submitResignation } from "../services/api";

const ResignationForm = ({ token }) => {
  const [lwd, setLwd] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await submitResignation(lwd, reason, token);
      if (response.ok) {
        alert("Resignation submitted successfully!");
      }
    } catch (error) {
      alert("Error submitting resignation");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        value={lwd}
        onChange={(e) => setLwd(e.target.value)}
        required
      />
      <textarea
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        placeholder="Reason for resignation"
        required
      />
      <button type="submit">Submit Resignation</button>
    </form>
  );
};

export default ResignationForm;
