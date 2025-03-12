import React from "react";
import { useInView } from "react-intersection-observer";

const steps = [
  {
    title: "Upload. Click. Done.",
    description:
      "Drop in your job description, select your hiring criteria, and upload candidates list.",
  },
  {
    title: "AI invites the candidates for interviews",
    description:
      "Candidates receive an email with a link to complete their interview with instructions.",
  },
  {
    title: "Candidates take the interview",
    description:
      "Candidates click the link, enter their details, upload their photo and ID, and then proceed with the interview.",
  },
  {
    title: "AI scores the interviews",
    description:
      "Provides a comprehensive scorecard for each candidate based on their responses.",
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
        <h3 className="text-2xl font-bold mb-4 text-center text-blue-700">
          The 4 simple steps to get started
        </h3>
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
