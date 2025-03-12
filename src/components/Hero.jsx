import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gray-100 py-20"
    >
      <div className="container mx-auto pl-6">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-2/5 mb-12 lg:mb-0"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-8 mt-6 text-gray-800">
              Hire Smarter, Faster — No Recruiters Needed 
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-600">
              Post a job, let AI screen candidates, and get a hire-ready shortlist.  
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Hire in hours, not weeks →
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-3/5"
          >
            <img
              src="/assets/ai_mockup.png"
              alt="AI Interview Assistant"
              className="w-full h-[420px] rounded-lg shadow-lg animate-float"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
