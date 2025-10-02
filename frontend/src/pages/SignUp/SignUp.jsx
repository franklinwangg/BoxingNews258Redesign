import React from "react";
import "./Signup.css";

const SignUp = () => {
  const VITE_SERVER_ORIGIN = import.meta.env.VITE_SERVER_ORIGIN;

  const handleSubmitButton = () => {
    fetch(`${VITE_SERVER_ORIGIN}/sign-up`);
  };

  return (
    <div className="signup-page">
      <div className="signup-page__header"></div>
      <div className="signup-page__username-and-password-field">
        <div className="signup-page__signup-title">
          Sign in or <br />
          create an account
        </div>

        <form className="signup-page__signup-form">
          <div className="signup-page__signup-description">
            This email will be used to sign into Vox Media <br />
            sites. By submitting your email, you agree to our <br />
            Terms and Privacy Policy to receive email
            <br />
            correspondence from us.
          </div>
          <div className="signup-page__entry-section">
            <label className="signup-page__label signup-page__label--username">
              Username :
            </label>
            <input
              className="signup-page__input signup-page__input--username"
              type="text"
            />
          </div>

          <div className="signup-page__entry-section">
            <label className="signup-page__label signup-page__label--password">
              Password :
            </label>
            <input
              className="signup-page__input signup-page__input--password"
              type="text"
            />
          </div>

          <button
            className="signup-page__submit-button"
            onClick={() => {
              handleSubmitButton;
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
