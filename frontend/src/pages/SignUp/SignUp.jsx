import { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const VITE_SERVER_ORIGIN = import.meta.env.VITE_SERVER_ORIGIN;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmitButton = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${VITE_SERVER_ORIGIN}/api/users/sign-up`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password: password }),
      });

      if (response.ok) {
        // redirect to login
        console.log("User successfully signed up. ");
        navigate(`/login`);

        return;
      } else {
        console.log("Error : unable to sign user up.");
      }
    } catch (error) {
      console.log("Error during signup : ", error);
    }
  };

  return (
    <div class="signup-page">
      <div class="signup-page__header"></div>
      <div class="signup-page__username-and-password-field">
        <div class="signup-page__signup-title">Create an Account</div>
        <form class="signup-page__signup-form">
          <div class="signup-page__signup-description">
            This email will be used to sign into Vox Media <br />
            sites. By submitting your email, you agree to our <br />
            Terms and Privacy Policy to receive email
            <br />
            correspondence from us.
          </div>
          <div class="signup-page__entry-section">
            <label class="signup-page__label signup-page__label--username">
              Username :
            </label>
            <input
              className="login-page__input login-page__input--username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div class="signup-page__entry-section">
            <label class="signup-page__label signup-page__label--password">
              Password :
            </label>
            <input
              className="login-page__input login-page__input--username"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            class="signup-page__submit-button"
            onClick={handleSubmitButton}
          >
            Submit
          </button>
          <div class="signup-page__login-link">
            <a href="/login">Log In</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
