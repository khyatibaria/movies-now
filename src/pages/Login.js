import "./Login.css";
import { images } from "../asset/index";
const Login = () => {
  const { DarkLogo, LightLogo } = images;
  return (
    <div className="login">
      <div className="login_nav">
        <img className="login_nav_logo" src={LightLogo} />
        <button className="login_nav_button">Sign Up</button>
      </div>
      <div className="login_body">
        <h1>Unlimited Flims,TV programs and more</h1>
        <h2>Watch anywhere, Cancel anytime</h2>
        <h3>
          Ready to watch? Enter your email to start or restart your membership
        </h3>
        <form className="login_form">
          <input placeholder="Email" className="login_form_input" />
          <button className="login_form_button">GET STARTED</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
