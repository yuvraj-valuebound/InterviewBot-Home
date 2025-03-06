import React from "react";
import { useInView } from "react-intersection-observer";

const steps = [
  {
    title: "Set Up Interview",
    description: "Define job requirements and interview parameters.",
  },
  {
    title: "AI Preparation",
    description: "Our AI analyzes the job and prepares relevant questions.",
  },
  {
    title: "Conduct Interview",
    description: "The AI interviewer interacts with the candidate.",
  },
  {
    title: "Receive Insights",
    description: "Get detailed reports and analytics on candidate performance.",
  },
];

const Step = ({ title, description, index, inView }) => (
  <div
    className={`flex items-start mb-8 transition-all duration-1000 ${
      inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
    }`}
  >
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
      {index + 1}
    </div>
    <div className="ml-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">
          Our simple 4-step process to revolutionize your hiring
        </p>
        <div ref={ref} className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <Step key={index} {...step} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
