import React from "react";
import logo from "../assets/logo.png";
import "./HeaderBar.css";
import { useNavigate } from "react-router-dom";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const HeaderBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className="header">
        <div className="header__brand-and-actions">
          <div className="brand">SB NATION</div>
          <div className="actions">
            <div className="actions__auth-links">
              <button
                className="header__auth-btn"
                onClick={() => {
                  navigate("/sign-up");
                }}
              >
                Sign Up
              </button>
              <button
                className="header__auth-btn"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
        <div className="header__logo-title-search">
          <div className="header__logo-and-description">
            <div className="logo">
              <img className="logo__image" src={logo} alt="Logo" />
            </div>

            <div className="brand-description">
              <p className="brand-description__tagline">
                A Global Boxing News and Commentary Community
              </p>
              <p className="brand-description__date">September 8, 2025</p>
            </div>
          </div>

          <div className="header__title">BOXINGNEWS258</div>
          <span className="header__search-icon">🔍</span>
        </div>
        <div className="header__menu">
          {/* Navbar */}
          <nav className="nav-bar">
            <ul className="nav-bar__options">
              <li className="nav-bar__option">THE FEED</li>
              <li className="nav-bar__option">RANKINGS ▾</li>
              <li className="nav-bar__option">SCHEDULE ▾</li>
              <li className="nav-bar__option">BETTING ▾</li>
              <li className="nav-bar__option">TEAM</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default HeaderBar;
