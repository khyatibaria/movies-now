import { useRef, useState } from "react";
import { auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./Signup.css";

const Signup = () => {
  const [register, setRegister] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const registerUser = (e) => {
    e.preventDefault();
    setRegister(true);
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const userLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="signup">
      <h1 className="signup_title">Sign Up</h1>
      <form className="signup_form" onSubmit={userLogin}>
        <input
          ref={emailRef}
          className="signup_email"
          placeholder="Email"
          type="email"
        />
        <input
          ref={passwordRef}
          className="signup_password"
          placeholder="Password"
          type="password"
        />
        <button className="signup_button" type="submit">
          {register ? "Register" : "Sign In"}
        </button>
      </form>
      <div>
        <span className="signup_newuser">Dont have account? </span>
        <button className="signup_newuser_button" onClick={registerUser}>
          Register Now
        </button>
      </div>
    </div>
  );
};
export default Signup;
