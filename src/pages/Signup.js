import Navbarinside from "../components/Navbarinside";
import React, { useState } from "react";
import "./Auth.css"; // Import the CSS file for styling
import { useNavigate } from "react-router-dom"; //this is used to navigate buttons
import ticket_bg from "../assets/ticket_bg.jpg";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [aadharNo, setAadharNo] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:5000/signup", {
        name,
        email,
        aadharNo,
        phoneNo,
        password,
      });
      
      // Assuming your backend sends a success message upon successful signup
      alert(response.data);

      // You can also redirect to the login page or perform other actions
    } catch (error) {
      // Handle error, e.g., display an error message
      alert("Signup failed. Please try again.");
    }
  };

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/About");
  };

  const styles = {
    backgroundImage: `url(${ticket_bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "contain",
    height: "100vh", // Set the height to cover the entire viewport
  };

  return (
    <>
      <div style={styles}>
        <Navbarinside />

        <div className="auth-container container mt-5">
          <h2>Sign Up</h2>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Aadhar Number"
            value={aadharNo}
            onChange={(e) => setAadharNo(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignup}>Sign Up</button>
          <br />
          <br />
          <button onClick={goToLogin}> Go to Login</button>
        </div>
      </div>
    </>
  );
}

export default Signup;