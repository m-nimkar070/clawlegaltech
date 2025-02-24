import React, { useEffect, useState } from "react";
import { getUserResignations, submitExitQuestionnaire } from "../services/api";
import QuestionnaireModal from "./QuestionnaireModal";

const ResignationList = ({ token }) => {
  const [resignations, setResignations] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedResignationId, setSelectedResignationId] = useState(null);

  useEffect(() => {
    const fetchResignations = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await getUserResignations(token);
        setResignations(response.data.data);
      } catch (error) {
        console.error("Error fetching resignations:", error);
      }
    };
    fetchResignations();
  }, [token]);

  const handleSubmitQuestionnaire = async (responses) => {
    const token = localStorage.getItem("token");
    try {
      await submitExitQuestionnaire(selectedResignationId, responses, token);
      alert("Questionnaire submitted successfully!");
      window.location.reload(); // Refresh the page to update the list
    } catch (error) {
      alert("Error submitting questionnaire");
    }
  };

  const handleModal =(id)=>{
    setSelectedResignationId(id);
    setIsModalOpen(true);

  }

  return (
    <div>
      <h2>Your Resignations</h2>
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
                  className="approve"
                  disabled={resignation.status !== "approved"}
                  onClick={() =>
                    handleModal(resignation._id)
                  }
                >
                  Answer Questions
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <QuestionnaireModal 
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onSubmit={handleSubmitQuestionnaire}
    />
    </div>
  );
};

export default ResignationList;