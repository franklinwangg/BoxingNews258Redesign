import React from "react";
import "./Homepage.css";
import img1 from "../../assets/postImages/joseph-parker.png";
import img2 from "../../assets/postImages/parker-and-joshua.png";
import img3 from "../../assets/postImages/fulton-vs-foster.png";

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Top Banner Ad */}
      <div className="banner-ad">
        <img
          src="https://via.placeholder.com/728x90?text=Moozi+Ad"
          alt="Ad Banner"
        />
      </div>

      {/* Header */}
      <header className="header">
        <div className="header-left">
          <div className="logo-circle">
            <span className="logo-text">🥊</span>
          </div>
          <div className="header-info">
            <p>A Global Boxing News and Commentary Community</p>
            <p>September 8, 2025</p>
          </div>
        </div>
        <div className="header-title">SB NATION</div>
        <div className="header-right">
          <button className="auth-btn">Sign Up</button>
          <button className="auth-btn">Login</button>
          <span className="search-icon">🔍</span>
        </div>
      </header>

      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li>The Feed</li>
          <li>Rankings ▾</li>
          <li>Schedule ▾</li>
          <li>Betting ▾</li>
          <li>Team</li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="content">
        {/* Left Feature Story */}
        <div className="feature-story">
          <img src={img1} alt="Main Story" />
          <div className="story-meta">BOXING NEWS | 2 HOURS AGO</div>
          <h1>
            ‘I’m treating this as my championship of the world fight’: Parker
            not taking Wardley lightly
          </h1>
          <p className="story-author">By Wil Esco · 1 Comment / 1 New</p>
        </div>

        {/* Right Side Stories */}
        <div className="side-stories">
          <div className="story-card">
            <img src={img2} alt="Story" />
            <div className="story-meta">BOXING NEWS | 8:58 AM PDT</div>
            <h2>
              Parker: Joshua vs Paul ‘doesn’t make sense’ if AJ is serious about
              boxing
            </h2>
            <p className="story-author">By Scott Christ · 3 Comments / 3 New</p>
          </div>

          <div className="story-card">
            <img src={img3} alt="Story" />
            <div className="story-meta">BOXING NEWS | 7:34 AM PDT</div>
            <h2>
              ‘I know his style’: Fulton doesn’t expect hard fight from Foster
            </h2>
            <p className="story-author">By Wil Esco · 4 New</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
