import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./Pages/Login";
import AdminDashboard from "./Pages/Dashboard";
import Dashboard from "./Pages/Dashboard";
import Register from "./Pages/Register";
import './styles/App.css'

const App = () => {
  const role = localStorage.getItem("role");
  return (
    <Router>
      <Navbar />
      <div className="container">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={role === "hr" ? <Navigate to="/admin" /> : <Dashboard />}
        />
        <Route
          path="/admin"
          element={role === "hr" ? <AdminDashboard /> : <Navigate to="/dashboard" />}
        />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
