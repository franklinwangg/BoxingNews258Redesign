import React from "react";
import "./Login.css";

const Login = () => {
  const VITE_SERVER_ORIGIN = import.meta.env.VITE_SERVER_ORIGIN;

  const handleSubmitButton = () => {
    fetch(`${VITE_SERVER_ORIGIN}/sign-up`);
  };

  return (
    <div>
      <div class="margin-left-5">
        <div></div>
        <div class="border-white">
          <div class="text-center text-black-500 text-2xl font-bold p-4">
            Sign in or <br />
            create an account
          </div>
          <form class="text-center margin-top-4">
            <div>
              This email will be used to sign into Vox Media <br />
              sites. By submitting your email, you agree to our <br />
              Terms and Privacy Policy to receive email
              <br />
              correspondence from us.
            </div>
            <div>
              <label>Username :</label>
              <input type="text" />
            </div>
            <div>
              <label>Password :</label>
              <input type="text" />
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
      <script
        type="module"
        src="/frontend/src/main.jsx?t=1759477470588"
      ></script>
    </div>
  );
};

export default Login;
