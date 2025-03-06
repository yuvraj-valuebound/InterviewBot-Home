import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Smart Domain Detection",
    icon: "🧠",
    description:
      "Our AI adapts to various job roles and industries, ensuring relevant questions for any position.",
  },
  {
    title: "Real-time Analysis",
    icon: "📊",
    description:
      "Get instant insights during the interview process, helping you make informed decisions quickly.",
  },
  {
    title: "Custom Questions",
    icon: "❓",
    description:
      "Generate role-specific questions automatically, tailored to each unique position and company culture.",
  },
  {
    title: "Behavioral Assessment",
    icon: "🧑‍🤝‍🧑",
    description:
      "Evaluate soft skills and cultural fit with advanced AI-driven behavioral analysis.",
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
    <h3 className="text-2xl font-semibold mb-4 text-purple-700">{title}</h3>
    <p className="text-lg text-gray-600">{description}</p>
  </motion.div>
);

const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen flex items-center bg-white py-20"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-6 text-center text-purple-700"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto"
        >
          Streamline your hiring process with our AI-powered solutions. Our
          cutting-edge technology ensures a comprehensive and efficient
          interview experience.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold mb-6">
            Ready to revolutionize your hiring process?
          </h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Start Free Trial
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Services;
