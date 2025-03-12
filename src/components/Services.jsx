import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Set Up in Seconds",
    icon: "🚀",
    description: "Upload job description, select interviewer, upload list of candidates and you're all set.",
  },
  {
    title: "Natural Questions",
    icon: "🤖",
    description: "Questions and follow ups are generated dynamically based on resume and job description.",
  },
  {
    title: "No Bias, Only Skill",
    icon: "🛡️",
    description: " All candidates are scored based on a unified merit system, no room for human bias.",
  },
  {
    title: "Vibe Check? Passed",
    icon: "📊",
    description: "Shows potential red flags or areas of further investigation where there is uncertainity.",
  },
];

const ServiceCard = ({ title, icon, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.05 }}
    className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
  >
    <div className="text-5xl mb-6">{icon}</div>
    <h3 className="text-2xl font-semibold mb-4 text-indigo-700">{title}</h3>
    <p className="text-lg text-gray-600">{description}</p>
  </motion.div>
);

const Services = () => {
  return (
    <section id="services" className="min-h-screen flex items-center bg-white py-20">
      <div className="container mx-auto px-6">
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-indigo-700"
        >
          Secure top talent today, while your competitors are still searching tomorrow.
        </motion.h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
