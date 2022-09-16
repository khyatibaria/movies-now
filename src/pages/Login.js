import { useState } from "react";
import "./Login.css";
import { images } from "../asset/index";
import Signup from "../components/Signup";
const Login = () => {
  const { DarkLogo, LightLogo } = images;
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <div className="login">
      <div className="login_nav">
        <img className="login_nav_logo" src={LightLogo} />
        <button
          className="login_nav_button"
          onClick={() => {
            setShowSignUp(true);
          }}
        >
          Sign Up
        </button>
      </div>
      <div className="login_body">
        {showSignUp ? (
          <Signup />
        ) : (
          <>
            <h1>Unlimited Flims,TV programs and more</h1>
            <h2>Watch anywhere, Cancel anytime</h2>
            <h3>
              Ready to watch? Enter your email to start or restart your
              membership
            </h3>
            <form className="login_form">
              <input placeholder="Email" className="login_form_input" />
              <button
                className="login_form_button"
                onClick={() => {
                  setShowSignUp(true);
                }}
              >
                GET STARTED
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
export default Login;
