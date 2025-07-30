import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
    
  return (
    <div className="home-container">
      <div className="hero">
        <h1 className="hero-title">
          Welcome to <span className="highlight">CodeGrimoire</span> 🧾
        </h1>
        <p className="hero-subtitle">
          A mystical space to store, manage, and retrieve your magical code spells ✨
        </p>
        <div className="hero-buttons">
          <Link to="/snippets" className="btn yellow">
            View Snippets
          </Link>
          <Link to="/add" className="btn outline">
            Add New
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
