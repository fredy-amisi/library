import React, { useState } from "react";
import "../Css/login.css";
import Scrollbutton from "../Components/Scrollbutton";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // Update state based on input name
    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        // Handle unexpected input names (optional)
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:80/api/login.php", {
        username,
        password,
      });

      // After successful login
if (response.data.success) {
  // Redirect to dashboard with username
  window.location.href = `/Dashboard?username=${username}`;
  alert("You have successfully logged in.");
}
else {
        // Login failed, display specific error message
        alert(response.data.error);
      }
    } catch (error) {
      console.error(error);
      alert("Invalid username or password.");
    }
  };

  return (
    <div>
      <div className="login-section">
        <h3>FASH TRANSPORT SERVICES</h3>
        <p>Sign in to your account</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">
            Username :
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleInputChange}
              placeholder="Enter Your Username Here"
              required
            />
          </label>
          <label htmlFor="password">
            Password :
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              placeholder="Enter Your Password Here"
              required
            />
          </label>
          <div className="div-remember">
            <label htmlFor="checkbox">
              <span>Remember Me</span>
              <input type="checkbox" name="checkbox" id="checkbox" />
            </label>
            <p>Forgot Your Password?</p>
          </div>
          <button className="login-button">
            <span>Login</span>
          </button>
          <p className="dont-p">
            Don't Have An Account? <a href="/Signup">Sign Up</a>
          </p>
        </form>
      </div>
      <Scrollbutton />
    </div>
  );
};

export default Login;
