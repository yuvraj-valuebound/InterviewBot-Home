import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gray-100 py-20"
    >
      <div className="container mx-auto pl-6">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 mb-12 lg:mb-0"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-8 mt-6 text-gray-800">
              Transform Your Hiring
              <br /> Process with AI-Powered Interviews
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-600">
              Conduct seamless interviews across all domains with our
              intelligent AI interviewer
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Watch Demo
              </motion.button>
            </div>
            <div className="mt-12">
              <p className="text-lg mb-4">Trusted by leading companies:</p>
              <div className="flex space-x-6">
                {/* Replace with actual company logos */}
                <img
                  src="/assets/intel.jpg"
                  alt="Company 1"
                  className="h-28 rounded-lg shadow-lg "
                />
                <img
                  src="/assets/microsoft.png"
                  alt="Company 2"
                  className="h-28 rounded-lg shadow-lg "
                />
                <img
                  src="/assets/tata.png"
                  alt="Company 3"
                  className="h-28 rounded-lg shadow-lg "
                />
                <img
                  src="/assets/hsbc.png"
                  alt="Company 4"
                  className="h-28 rounded-lg shadow-lg "
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <img
              src="/assets/image.png"
              alt="AI Interview Assistant"
              className="w-full h-[380px] rounded-lg shadow-lg animate-float"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
