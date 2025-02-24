import React, { useState } from "react";

const QuestionnaireModal = ({ isOpen, onClose, onSubmit }) => {
  const [responses, setResponses] = useState([
    { questionText: "Why are you leaving?", response: "" },
    { questionText: "How was your experience?", response: "" },
  ]);

  const handleResponseChange = (index, value) => {
    const updatedResponses = [...responses];
    updatedResponses[index].response = value;
    setResponses(updatedResponses);
  };

  const handleSubmit = () => {
    onSubmit(responses);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Exit Questionnaire</h2>
        {responses.map((question, index) => (
          <div key={index} className="question">
            <label>{question.questionText}</label>
            <textarea
              value={question.response}
              onChange={(e) => handleResponseChange(index, e.target.value)}
              placeholder="Your response"
            />
          </div>
        ))}
        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default QuestionnaireModal;