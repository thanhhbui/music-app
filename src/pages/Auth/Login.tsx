import React, { useState } from "react";
import "./login.scss";
import { faApple, faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    // dispatch(Login(email, password));
    console.log("email: " + email);
    console.log("password: " + password);
  }

  return (
    <div className="login">
      <div className="background">
        <div className="login-background">
          <div className="header">
            <FontAwesomeIcon className="music-icon" icon={faMusic} />
          </div>
          <h1>Log in to spotify</h1>
          <div className="login-buttons">
            <div className="login-button">
              <button className="btn-google">
                <FontAwesomeIcon icon={faGoogle} className="icon" />
                Log in with Google
              </button>
              <button className="btn-facebook">
                <FontAwesomeIcon icon={faFacebook} className="icon" />
                Log in with Facebook
              </button>
              <button className="btn-apple">
                <FontAwesomeIcon icon={faApple} className="icon" />
                Log in with Apple
              </button>
            </div>
          </div>
          <hr role="presentation" className="dash"></hr>
          <div className="center-form">
            <form action="" className="form">
              <div className="form-log-in">
                <div>
                  <label htmlFor="">Email address</label>
                </div>
                <div>
                  <input
                    className="input"
                    type="email"
                    placeholder="name@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-log-in">
                <div>
                  <label htmlFor="">Password</label>
                </div>
                <div>
                  <input
                    className="input"
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="login-button">
                <button onClick={handleLogin}>Log in</button>
              </div>
              <div className="forgot-password">
                <Link to="/">Forgot your password?</Link>
              </div>
            </form>
          </div>
          <div className="go-to-sign-up">
            <p>
              Don't have an account? <Link to="/sign-up">Sign up for Spotify</Link>
            </p>
          </div>
        </div>
        <footer className="footer">
          <p>
            This site was created by thanhbui <Link to="/">Privacy Policy</Link> and <Link to="/">Terms of Service</Link> apply.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Login;
