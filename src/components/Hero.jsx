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
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 mb-12 lg:mb-0"
          >
            <h1 className="text-1xl lg:text-5xl font-bold mb-8 mt-6 text-blue-800">
            3000+ applicants received on your job posting, what now?
            </h1>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Screen instantly
              </motion.button>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <img
              src="/assets/proto.png"
              alt="AI Screening Dashboard"
              className="w-full h-[380px] rounded-lg shadow-lg animate-float"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
