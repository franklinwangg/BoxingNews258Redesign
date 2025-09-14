import React from "react";
import "./Homepage.css";
import img1 from "../../assets/postImages/joseph-parker.png";
import img2 from "../../assets/postImages/parker-and-joshua.png";
import img3 from "../../assets/postImages/fulton-vs-foster.png";
import logo from "../../assets/logo.png";

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Top Banner Ad */}
      <div className="banner-ad">
        <img
          className="banner-ad__image"
          src="https://via.placeholder.com/728x90?text=Moozi+Ad"
          alt="Ad Banner"
        />
      </div>

      {/* Header */}
      <header className="header">
        <div className="header__brand-and-actions">
          <div className="brand">SB NATION</div>
          <div className="actions">
            <div className="actions__auth-links">
              <button className="header__auth-btn--sign-up">Sign Up</button>
              <button className="header__auth-btn--login">Login</button>
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

      {/* Main Content */}
      <main className="homepage__content">
        {/* Left Feature Story */}
        <article className="feature-story">
          <img className="feature-story__image" src={img1} alt="Main Story" />
          <div className="feature-story__description">
            BOXING NEWS | 2 HOURS AGO
          </div>
          <h1 className="feature-story__title">
            ‘I’m treating this as my championship of the world fight’: Parker
            not taking Wardley lightly
          </h1>
          <p className="feature-story__author">
            By Wil Esco · 1 Comment / 1 New
          </p>
        </article>

        {/* Right Side Stories */}
        <div className="side-stories">
          <article className="side-story">
            <img className="side-story__image" src={img2} alt="Story" />
            <div className="side-story__description">
              BOXING NEWS | 8:58 AM PDT
            </div>
            <h2 className="side-story__title">
              Parker: Joshua vs Paul ‘doesn’t make sense’ if AJ is serious about
              boxing
            </h2>
            <p className="side-story__author">
              By Scott Christ · 3 Comments / 3 New
            </p>
          </article>

          <article className="side-story">
            <img className="side-story__image" src={img3} alt="Story" />
            <div className="side-story__description">
              BOXING NEWS | 7:34 AM PDT
            </div>
            <h2 className="side-story__title">
              ‘I know his style’: Fulton doesn’t expect hard fight from Foster
            </h2>
            <p className="side-story__author">By Wil Esco · 4 New</p>
          </article>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
