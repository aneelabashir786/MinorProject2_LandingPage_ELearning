import React, { useState } from 'react';
import './Pricing.css';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      id: 1,
      name: "Starter",
      description: "Perfect for beginners starting their web dev journey",
      monthlyPrice: 29,
      yearlyPrice: 290,
      popular: false,
      features: [
        { text: "Access to basic courses", included: true },
        { text: "10 projects", included: true },
        { text: "Community support", included: true },
        { text: "Course certificates", included: true },
        { text: "1-on-1 mentorship", included: false },
        { text: "Job placement support", included: false },
        { text: "Lifetime access", included: false }
      ],
    },
    {
      id: 2,
      name: "Professional",
      description: "For serious learners ready to become job-ready developers",
      monthlyPrice: 59,
      yearlyPrice: 590,
      popular: true,
      features: [
        { text: "Access to all courses", included: true },
        { text: "50+ projects", included: true },
        { text: "Priority community support", included: true },
        { text: "Course certificates", included: true },
        { text: "2 hours/month 1-on-1 mentorship", included: true },
        { text: "Job placement support", included: true },
        { text: "Lifetime access", included: false }
      ],
    },
    {
      id: 3,
      name: "Enterprise",
      description: "Ultimate package with lifetime access and career support",
      monthlyPrice: 99,
      yearlyPrice: 990,
      popular: false,
      features: [
        { text: "Access to all courses + new releases", included: true },
        { text: "Unlimited projects", included: true },
        { text: "24/7 priority support", included: true },
        { text: "Course certificates", included: true },
        { text: "Unlimited 1-on-1 mentorship", included: true },
        { text: "Guaranteed job placement", included: true },
        { text: "Lifetime access", included: true }
      ],
    }
  ];

  return (
    <section className="pricing" id="pricing">
      <div className="pricing-container">
        {/* Section Header */}
        <div className="pricing-header">
          <h1>Pricing Plans</h1>
          <h2 className="section-title">
            Choose Your
            <span className="highlight"> Learning Path</span>
          </h2>
          <p className="section-subtitle">
            Flexible pricing options for every budget. Start free, upgrade anytime.
          </p>

          {/* Billing Toggle */}
          <div className="billing-toggle">
            <span className={billingCycle === 'monthly' ? 'active' : ''}>Monthly</span>
            <button 
              className="toggle-switch"
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
            >
              <span className={`toggle-slider ${billingCycle === 'yearly' ? 'yearly' : ''}`}></span>
            </button>
            <span className={billingCycle === 'yearly' ? 'active' : ''}>
              Yearly
              <span className="save-badge">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-grid">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && (
                <div className="popular-badge">Most Popular</div>
              )}
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>

              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">
                  {billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                </span>
                <span className="period">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
              </div>

              {billingCycle === 'yearly' && (
                <p className="yearly-note">Billed annually at ${plan.yearlyPrice}</p>
              )}

              <button className={`plan-button ${plan.popular ? 'popular-btn' : ''}`}>
                Get Started
                <span className="arrow">→</span>
              </button>

              <ul className="features-list">
                {plan.features.map((feature, index) => (
                  <li key={index} className={feature.included ? 'included' : 'not-included'}>
                    <span className="check-icon">
                      {feature.included ? (
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17l-5-5" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 6L6 18M6 6l12 12" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </span>
                    {feature.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;