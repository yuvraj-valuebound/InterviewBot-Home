import React, { useState } from "react";

const plans = [
  {
    name: "Starter",
    price: { monthly: 49, annual: 39 },
    features: ["Up to 10 interviews/month", "Basic reporting", "Email support"],
  },
  {
    name: "Professional",
    price: { monthly: 99, annual: 89 },
    features: [
      "Up to 50 interviews/month",
      "Advanced reporting",
      "Priority email support",
      "Custom question bank",
    ],
  },
  {
    name: "Enterprise",
    price: { monthly: 199, annual: 179 },
    features: [
      "Unlimited interviews",
      "Full analytics suite",
      "24/7 phone support",
      "Custom integrations",
      "Dedicated account manager",
    ],
  },
];

const PricingCard = ({ name, price, features, isAnnual }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
    <h3 className="text-2xl font-bold mb-4">{name}</h3>
    <div className="text-4xl font-bold mb-4">
      ${isAnnual ? price.annual : price.monthly}
      <span className="text-sm font-normal">/mo</span>
    </div>
    <ul className="mb-8 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center mb-2">
          <svg
            className="w-5 h-5 text-indigo-600 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <button className="btn-primary mt-auto">Choose Plan</button>
  </div>
);

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Simple, Transparent Pricing</h2>
        <p className="section-subtitle">Choose the plan that fits your needs</p>
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="flex items-center bg-gray-200 rounded-full p-1">
              <button
                className={`py-2 px-4 rounded-full ${
                  !isAnnual ? "bg-white shadow-md" : ""
                }`}
                onClick={() => setIsAnnual(false)}
              >
                Monthly
              </button>
              <button
                className={`py-2 px-4 rounded-full ${
                  isAnnual ? "bg-white shadow-md" : ""
                }`}
                onClick={() => setIsAnnual(true)}
              >
                Annual
              </button>
            </div>
            {isAnnual && (
              <div className="absolute -top-6 right-0 bg-indigo-600 text-white text-xs py-1 px-2 rounded">
                Save 20%
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} isAnnual={isAnnual} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
