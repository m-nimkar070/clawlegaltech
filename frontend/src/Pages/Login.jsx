import React, { useState } from "react";
import { login } from "../services/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const styles = {
    form: {
      maxWidth: "400px",
      margin: "2rem auto",
      padding: "1rem",
      border: "1px solid #ccc",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    input: {
      width: "100%",
      padding: "0.5rem",
      marginBottom: "1rem",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    button: {
      width: "100%",
      padding: "0.75rem",
      backgroundColor: "#61dafb",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    buttonHover: {
      backgroundColor: "#21a1f1",
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role); // Store role
      console.log("Role after login:", response.data.role === "hr"); // Debugging
      if (response.data.role === "hr") {
        navigate("/admin"); // Redirect to admin dashboard
      } else {
        navigate("/dashboard"); // Redirect to user dashboard
      }
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        style={styles.input}
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        style={styles.input}
        required
      />
      <button type="submit" style={styles.button}>
        Login
      </button>
    </form>
  );
};

export default Login;
