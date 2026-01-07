import React, { useState } from 'react';
import './Testimonials.css';
import girl1 from "../assets/girl1.jfif";
import girl2 from "../assets/girl2.jfif";
import man1 from "../assets/person3.jfif";

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Alice",
      role: "Frontend Developer",
      company: "Google",
      image: girl1,
      rating: 5,
      text: "LearnHub completely transformed my career! I went from zero coding knowledge to landing a frontend developer role at Google in just 8 months. The structured curriculum and hands-on projects were exactly what I needed.",
    },
    {
      id: 2,
      name: "Bob",
      role: "Full Stack Developer",
      company: "Microsoft",
      image: man1,
      rating: 5,
      text: "The best investment I've made in my career. The mentors are incredible, the community is supportive, and the projects prepared me for real-world challenges. Got multiple job offers within 2 months of completing the course!",
    },
    {
      id: 3,
      name: "Ruhma",
      role: "UI/UX Designer & Developer",
      company: "Meta",
      image: girl2,
      rating: 5,
      text: "I loved that LearnHub combines design with development. The portfolio projects helped me showcase my skills, and the career support team helped me land my dream job. Highly recommend to anyone looking to break into tech!",
    }
  ];

  const companies = [
    { name: "Google", color: "#4285F4" },
    { name: "Microsoft", color: "#00A4EF" },
    { name: "Meta", color: "#0668E1" },
    { name: "Amazon", color: "#FF9900" },
    { name: "Apple", color: "#555555" },
    { name: "Netflix", color: "#E50914" }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">

        <div className="testimonials-header">
          <h1>Success Stories</h1>
          <h2 className="section-title">
            What Our Students
            <span className="highlight"> Say About Us</span>
          </h2>
          <p className="section-subtitle">
            Join thousands of successful developers who transformed their careers 
            with LearnHub. Here are some of their stories.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`testimonial-card ${activeTestimonial === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveTestimonial(index)}
            >
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" fill="#10B981">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              <p className="testimonial-text">"{testimonial.text}"</p>

              <div className="student-info">
                <div className="student-avatar">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="student-details">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="companies-section">
          <h3>Our Students Work At</h3>
          <div className="companies-grid">
            {companies.map((company, index) => (
              <div key={index} className="company-logo">
                <svg viewBox="0 0 120 40">
                  <rect x="5" y="5" width="110" height="30" rx="5" fill={company.color} opacity="0.1"/>
                  <text x="60" y="25" fontSize="14" fontWeight="600" fill={company.color} textAnchor="middle">
                    {company.name}
                  </text>
                </svg>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
