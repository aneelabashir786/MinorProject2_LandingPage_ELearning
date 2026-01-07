import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Section Header */}
        <div className="about-header">
          <h2 className="section-title">
            Your Journey to Becoming a
            <span className="highlight"> Web Developer</span>
          </h2>
          <p className="section-subtitle">
            Master modern web development with our comprehensive, project-based 
            learning platform designed for aspiring developers.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="about-content">
          {/* Left Side - Problem Statement */}
          <div className="about-problem">
            <div className="problem-card">
              <h3>The Challenge</h3>
              <p>
                Learning web development can be overwhelming. With countless 
                technologies, frameworks, and resources scattered across the internet, 
                beginners often don't know where to start or what to learn next.
              </p>
              
              <ul className="problem-list">
                <li>❌ Outdated tutorials and resources</li>
                <li>❌ Fragmented learning paths</li>
                <li>❌ Expensive bootcamps ($15K-$20K)</li>
                <li>❌ No hands-on project experience</li>
                <li>❌ Lack of mentor support</li>
              </ul>
            </div>
          </div>

          {/* Right Side - Solution */}
          <div className="about-solution">
            <div className="solution-card">
              <h3>Our Solution</h3>
              <p>
                LearnHub provides a structured, step-by-step learning path from 
                beginner to job-ready web developer. Learn by building real-world 
                projects with guidance from industry experts.
              </p>
              
              <ul className="solution-list">
                <li>✓ Up-to-date curriculum (2024-25)</li>
                <li>✓ Clear, structured learning paths</li>
                <li>✓ Affordable pricing (Starting at $29/month)</li>
                <li>✓ 50+ hands-on projects</li>
                <li>✓ 24/7 community & mentor support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* What We Offer */}
        <div className="about-offer">
          <h3 className="offer-title">What Makes Us Different</h3>
          <div className="offer-grid">
            <div className="offer-card">
              <div className="offer-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#10B981" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="6" stroke="#10B981" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="2" fill="#10B981"/>
                  <path d="M12 2V12M12 12L19 17" stroke="#059669" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h4>Structured Learning Path</h4>
              <p>
                Follow our carefully designed curriculum from HTML/CSS basics 
                to advanced React, Node.js, and beyond.
              </p>
            </div>

            <div className="offer-card">
              <div className="offer-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4>Project-Based Learning</h4>
              <p>
                Build real-world applications including e-commerce sites, 
                social media platforms, and web apps.
              </p>
            </div>

            <div className="offer-card">
              <div className="offer-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="7" r="4" stroke="#10B981" strokeWidth="2"/>
                  <path d="M16 11c2 0 3 1 3 3" stroke="#059669" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h4>Expert Instructors</h4>
              <p>
                Learn from senior developers working at top tech companies 
                like Google, Microsoft, and Meta.
              </p>
            </div>

            <div className="offer-card">
              <div className="offer-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 12v5c0 1 2 3 6 3s6-2 6-3v-5" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4>Career Support</h4>
              <p>
                Resume building, interview prep, portfolio reviews, and 
                direct connections to hiring companies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;