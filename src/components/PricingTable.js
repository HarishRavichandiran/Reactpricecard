import React from 'react';
import './PricingTable.css';

const PricingTable = () => {
  const plans = [
    {
      name: 'FREE',
      price: '$0/month',
      users: 'Single User',
      storage: '50GB',
      projects: {
        public: 'Unlimited',
        private: 'Unlimited',
      },
      features: ['Community Access', 'Dedicated Phone Support', 'Free Subdomain', 'Monthly Status Reports'],
      isFree: true,
    },
    {
      name: 'PLUS',
      price: '$9/month',
      users: '7 Users',
      storage: '90GB',
      projects: {
        public: 'Unlimited',
        private: 'Unlimited',
      },
      features: ['Community Access', 'Dedicated Phone Support', 'Free Subdomain', 'Monthly Status Reports'],
      isFree: false,
    },
    {
      name: 'PRO',
      price: '$49/month',
      users: 'Unlimited Users',
      storage: '100GB',
      projects: {
        public: 'Unlimited',
        private: 'Unlimited',
      },
      features: ['Community Access', 'Dedicated Phone Support', 'Free Subdomain', 'Monthly Status Reports'],
      isFree: false,
    },
  ];

  return (
    <div className="pricing-table">
      <h1>Choose your plan</h1>
      <div className="plan-container">
        {plans.map((plan, index) => (
          <div key={index} className={`plan-card ${plan.isFree ? 'free-plan' : ''}`}>
            <div className="plan-header">
              <h2>{plan.name}</h2>
              <p>{plan.price}</p>
            </div>
            <ul>
              <li>{plan.users}</li>
              <li>{plan.storage} Storage</li>
              <li>{`${plan.projects.public} Public Projects`}</li>
              <li>{`${plan.projects.private} Private Projects`}</li>
            </ul>
            <div className="features">
              {plan.features.map((feature, index) => (
                <div key={index} className="feature">
                  {feature}
                </div>
              ))}
            </div>
            <button className="button">{plan.isFree ? 'Get Started' : 'Buy Now'}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;