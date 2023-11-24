import Navbarinside from "../components/Navbarinside";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css"; // Import the CSS file for styling
import ticket_bg from "../assets/ticket_bg.jpg";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      // Assuming your backend sends a success message upon successful login
      console.log(response.data);

      // Redirect based on user role
      if (response.data === 'Login successful') {
        if (email === "26anugyaverma@gmail.com") {
          navigate("/admin");
        } else {
          navigate("/tickets");
        }
      }
    } catch (error) {
      // Handle error, e.g., display an error message
      alert("Login failed. Please check your email and password.");
    }
  };

  const styles = {
    backgroundImage: `url(${ticket_bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh", // Set the height to cover the entire viewport
  };

  return (
    <>
      <div style={styles}>
        <Navbarinside />

        <div className="auth-container container mt-5">
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </>
  );
}

export default Login