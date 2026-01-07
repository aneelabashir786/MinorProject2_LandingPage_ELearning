import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Frontend Development",
      description: "Master HTML, CSS, JavaScript, React, and modern frontend frameworks. Build beautiful, responsive user interfaces.",
      topics: ["HTML5 & CSS3", "JavaScript ES6+", "React & Redux", "Responsive Design"],
      duration: "4-6 Months",
      level: "Beginner to Advanced",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="#10B981" strokeWidth="2"/>
          <path d="M3 9h18M9 3v18" stroke="#10B981" strokeWidth="2"/>
          <circle cx="6" cy="6" r="1" fill="#10B981"/>
          <circle cx="12" cy="6" r="1" fill="#10B981"/>
          <circle cx="18" cy="6" r="1" fill="#10B981"/>
          <path d="M12 14l3 3 3-3M15 12v5" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Backend Development",
      description: "Learn Node.js, Express, databases, APIs, and server-side programming. Build scalable backend systems.",
      topics: ["Node.js & Express", "MongoDB & SQL", "RESTful APIs", "Authentication"],
      duration: "3-5 Months",
      level: "Intermediate",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="2" fill="#059669"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Full Stack Development",
      description: "Become a complete web developer. Learn frontend, backend, databases, deployment, and everything in between.",
      topics: ["MERN Stack", "Database Design", "Cloud Deployment", "DevOps Basics"],
      duration: "6-9 Months",
      level: "Beginner to Pro",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2v20M2 12h20" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="9" stroke="#10B981" strokeWidth="2"/>
          <path d="M12 2C9 2 6 5 6 12s3 10 6 10" stroke="#059669" strokeWidth="2"/>
          <path d="M12 2c3 0 6 3 6 10s-3 10-6 10" stroke="#059669" strokeWidth="2"/>
        </svg>
      )
    },
  ];

  return (
    <section className="features" id="courses">
      <div className="features-container">
        {/* Section Header */}
        <div className="features-header">
          <h1 className="highlight"> Our Cources</h1>
          <h2 className="section-title">
            Learn Web Development
            <span className="highlight"> Step by Step</span>
          </h2>
          <p className="section-subtitle">
            Choose your learning path and master web development with our 
            comprehensive, project-based courses designed for all skill levels.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">
                {feature.svg}
              </div>
              
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                
                <div className="feature-topics">
                  {feature.topics.map((topic, index) => (
                    <span key={index} className="topic-tag">
                      {topic}
                    </span>
                  ))}
                </div>
                
                <div className="feature-meta">
                  <div className="meta-item">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="#10B981" strokeWidth="2"/>
                      <path d="M12 6v6l4 2" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span>{feature.duration}</span>
                  </div>
                  <div className="meta-item">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#10B981" strokeWidth="2"/>
                      <circle cx="8.5" cy="7" r="4" stroke="#10B981" strokeWidth="2"/>
                      <path d="M20 8v6M23 11h-6" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span>{feature.level}</span>
                  </div>
                </div>
              </div>
              
              <button className="feature-btn">
                Learn More
                <span className="btn-arrow">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;