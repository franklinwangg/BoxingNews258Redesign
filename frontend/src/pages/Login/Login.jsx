import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserProvider";

import "./Login.css";

const Login = () => {
  const VITE_SERVER_ORIGIN = import.meta.env.VITE_SERVER_ORIGIN;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  console.log("VITE SERVER ORIGIN : ", VITE_SERVER_ORIGIN);
  const handleSubmitButton = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${VITE_SERVER_ORIGIN}/api/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password: password }),
      });

      if (!response.ok) {
        console.log("Login failed:", response.status);
        return;
      }

      const data = await response.json();
      console.log("Login successful:", data);
      // redirect to homepage
      navigate(`/`);

      // set userContext
      setUser(username);
    } catch (error) {
      console.log("Error during login : ", error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-page__header"></div>
      <div className="login-page__username-and-password-field">
        <div className="login-page__login-title">Log In</div>
        <form className="login-page__login-form">
          <div className="login-page__login-description">
            This email will be used to sign into Vox Media <br />
            sites. By submitting your email, you agree to our <br />
            Terms and Privacy Policy to receive email
            <br />
            correspondence from us.
          </div>
          <div className="login-page__entry-section">
            <label className="login-page__label login-page__label--username">
              Username :
            </label>
            <input
              className="login-page__input login-page__input--username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="login-page__entry-section">
            <label className="login-page__label login-page__label--password">
              Password :
            </label>

            <input
              className="login-page__input login-page__input--password"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="login-page__submit-button"
            onClick={handleSubmitButton}
          >
            Submit
          </button>
          <div className="login-page__create-account">
            <a href="/sign-up">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
