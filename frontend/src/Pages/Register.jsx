import React, { useState } from "react";
import { register } from "../services/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("employee");
  const [country, setCountry] = useState("");
  const navigate = useNavigate();

  const styles = {
    form: {
      maxWidth: "400px",
      margin: "2rem auto",
      padding: "1.5rem",
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
    select:{
        marginBottom: "1rem",
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
      await register(username, email, password, role, country);
      alert("Registration successful!");
      navigate("/login");
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        style={styles.input}
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <input
        style={styles.input}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        style={styles.input}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <select style={styles.select} value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="employee">Employee</option>
        <option value="admin">Admin</option>
      </select>
      <input
        style={styles.input}
        type="text"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        placeholder="Country"
        required
      />
      <button style={styles.button} type="submit">
        Register
      </button>
    </form>
  );
};

export default Register;
