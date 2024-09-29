import React, { useState } from "react";
import "./signup.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import {
  faGoogle,
  faFacebook,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    
  }

  return (
    <div className="signup">
      <header className="header">
        <FontAwesomeIcon className="music-icon" icon={faMusic} />
      </header>
      <section className="center">
        <header className="center-header">
          <h1 className="center-title">Sign up to start listening</h1>
        </header>
        <form className="center-form" action="">
          <div className="form-sign-up">
            <div>
              <label htmlFor="">Email address</label>
            </div>
            <div className="form-input">
              <input
                className="input"
                type="email"
                placeholder="name@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="form-sign-up">
            <div>
              <label htmlFor="">Password</label>
            </div>
            <div className="form-input">
              <input className="input" type="password" placeholder="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <button onClick={handleSignup}>Next</button>
          </div>
          {/* {error && <p className="error">{error}</p>} */}
        </form>
        <div className="center-log">
          <div className="or-divider">
            <span className="or-text">or</span>
          </div>
          <div className="signup-buttons">
            <button className="btn-google">
              <FontAwesomeIcon icon={faGoogle} className="icon" />
              Sign up with Google
            </button>
            <button className="btn-facebook">
              <FontAwesomeIcon icon={faFacebook} className="icon" />
              Sign up with Facebook
            </button>
            <button className="btn-apple">
              <FontAwesomeIcon icon={faApple} className="icon" />
              Sign up with Apple
            </button>
          </div>
          <p className="register">
            Already have an account? <Link to={"/log-in"}>Log in here</Link>.
          </p>
        </div>
      </section>
      <footer className="footer">
        <p>
          This site was created by thanhbui
          <br />
          <Link to="/">Privacy Policy</Link> and
          <Link to="/">Terms of Service</Link> apply.
        </p>
      </footer>
    </div>
  );
};

export default Signup;
