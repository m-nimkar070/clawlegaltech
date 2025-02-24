import axios from "axios";

const API_URL = "https://clawlegaltech.onrender.com/api"; // Replace with your backend URL

// Registration
export const register = (username, email, password, role, country) => {
  return axios.post(`${API_URL}/auth/register`, {
    username,
    email,
    password,
    role,
    country,
  });
};

// Login
export const login = (email, password) => {
  return axios.post(`${API_URL}/auth/login`, { email, password });
};

// Resignation
export const submitResignation = async(lwd, reason, token) => {
  return await axios.post(
    `${API_URL}/user/resign`,
    { lwd, reason },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

export const getUserResignations = (token) => {
  return axios.get(`${API_URL}/user/resignations`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Admin
export const getAllResignations = (token) => {
  return axios.get(`${API_URL}/admin/resignations`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const concludeResignation = (resignationId, approved, lwd, token) => {
  return axios.put(
    `${API_URL}/admin/conclude_resignation`,
    { resignationId, approved, lwd },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

// Exit Questionnaire
export const submitExitQuestionnaire = (resignationId, responses, token) => {
  return axios.post(
    `${API_URL}/user/responses`,
    { resignationId, responses },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

export const getExitResponses = (token) => {
  return axios.get(`${API_URL}/admin/exit_responses`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
