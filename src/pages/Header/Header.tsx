import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faHouse,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleSearchClick = () => {
    navigate("/search");
  }

  return (
    <div className="Header">
      <div className="logo" onClick={handleLogoClick}>
        <FontAwesomeIcon className="music-icon" icon={faMusic} />
      </div>
      <div className="header-center">
        <button className="home_icon" onClick={handleLogoClick}>
        <FontAwesomeIcon icon={faHouse} />
        </button>
        <form className="header-form" action="" onClick={handleSearchClick}>
          <FontAwesomeIcon className="faMagnifyingGlass" icon={faMagnifyingGlass} />
          <input className="header-input" type="text" placeholder="What do you want to play?" />
        </form>
      </div>
      <div className="header-right">
        <button onClick={() => navigate("/sign-up")} className="header-sign">Sign up</button>
        <button onClick={() => navigate("/log-in")} className="header-log">Log in</button>
      </div>
    </div>
  );
};

export default Header;
