// import React, { useState } from 'react';
// import './CTA.css';

// const CTA = () => {
//   const [email, setEmail] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (email) {
//       setSubmitted(true);
//       setTimeout(() => {
//         setSubmitted(false);
//         setEmail('');
//       }, 3000);
//     }
//   };

//   return (
//     <section className="cta">
//       <div className="cta-container">
//         {/* Decorative Elements */}
//         <div className="cta-decoration decoration-1"></div>
//         <div className="cta-decoration decoration-2"></div>

//         <div className="cta-content">
//           {/* Left Content */}
//           {/* <div className="cta-text">
//             <h2 className="cta-title">
//               Ready to Start Your
//               <span className="highlight"> Web Development Journey?</span>
//             </h2>
//             <p className="cta-description">
//               Join 50,000+ students learning web development. Get started today 
//               with our free trial - no credit card required.
//             </p>
//             <ul className="cta-benefits">
//               <li>
//                 <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M20 6L9 17l-5-5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//                 <span>14-day free trial with full access</span>
//               </li>
//               <li>
//                 <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M20 6L9 17l-5-5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//                 <span>Cancel anytime, no questions asked</span>
//               </li>
//               <li>
//                 <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M20 6L9 17l-5-5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//                 <span>Instant access to all courses & projects</span>
//               </li>
//             </ul>
//           </div> */}

//           {/* Right Form */}
//           <div className="cta-form-wrapper">
//             {!submitted ? (
//               <form className="cta-form" onSubmit={handleSubmit}>
//                 <h3>Start Learning Today</h3>
//                 <p>Enter your email to get started</p>

//                 <div className="form-group">
//                   <div className="input-icon">
//                     <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#10B981" strokeWidth="2"/>
//                       <path d="M22 6l-10 7L2 6" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                     </svg>
//                   </div>
//                   <input 
//                     type="email" 
//                     placeholder="Enter your email address"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                 </div>

//                 <button type="submit" className="cta-button">
//                   Start Free Trial
//                   <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </button>

//                 <p className="form-note">
//                   <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                   No credit card required • Start learning instantly
//                 </p>
//               </form>
//             ) : (
//               <div className="success-message">
//                 <div className="success-icon">
//                   <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <circle cx="12" cy="12" r="10" stroke="#10B981" strokeWidth="2"/>
//                     <path d="M9 12l2 2 4-4" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </div>
//                 <h3>Welcome Aboard! </h3>
//                 <p>Check your email for login instructions and course access.</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CTA;

import React, { useState } from 'react';
import './CTA.css';

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    goal: '',
    level: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        goal: '',
        level: ''
      });
    }, 3000);
  };

  return (
    <section className="cta">
      <div className="cta-container">

        {!submitted ? (
          <form className="cta-form" onSubmit={handleSubmit}>
            <h3>Start Learning Today</h3>
            <p>Please fill in your details to continue</p>

            {/* Full Name */}
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Learning Goal */}
            <div className="form-group">
              <label>What do you want to learn?</label>
              <select
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                required
              >
                <option value="">Select a goal</option>
                <option value="frontend">Frontend Development</option>
                <option value="backend">Backend Development</option>
                <option value="fullstack">Full Stack Development</option>
                <option value="uiux">UI/UX Design</option>
              </select>
            </div>

            {/* Experience Level */}
            <div className="form-group">
              <label>Your Experience Level</label>
              <select
                name="level"
                value={formData.level}
                onChange={handleChange}
                required
              >
                <option value="">Select level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            <button type="submit" className="cta-button">
              Get Started
            </button>

            <p className="form-note">
              No credit card required • Instant access
            </p>
          </form>
        ) : (
          <div className="success-message">
            <h3>Welcome! 🎉</h3>
            <p>Your learning journey starts now. Check your email.</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default CTA;
