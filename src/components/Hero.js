import React from 'react';
import './Hero.css';
import heroVideo from '../assets/hero_gif.mp4';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* Left Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            Learn Web Development
            <span className="highlight"> Online</span>
          </h1>

          <p className="hero-description">
            Master in-demand skills with expert-led courses Anytime, Anywhere.
            Join thousands of learners advancing their careers through our
            comprehensive online learning platform.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <h3>50K+</h3>
              <p>Active Students</p>
            </div>
            <div className="stat-item">
              <h3>500+</h3>
              <p>Expert Courses</p>
            </div>
            <div className="stat-item">
              <h3>95%</h3>
              <p>Success Rate</p>
            </div>
          </div>

          <div className="hero-cta">
            <button className="btn-primary">
              Get Started Free <span className="arrow">→</span>
            </button>
            <button className="btn-secondary">Watch Demo</button>
          </div>

          <div className="hero-features">
            <div className="feature-tag">1. 14-Day Free Trial</div>
            <div className="feature-tag">2. Cancel Anytime</div>
          </div>
        </div>

        {/* Right Video */}
        <div className="hero-image">
          <video
            className="hero-img-animated"
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

      </div>

      {/* Decorative Elements */}
      <div className="hero-decoration decoration-1"></div>
      <div className="hero-decoration decoration-2"></div>
    </section>
  );
};

export default Hero;
