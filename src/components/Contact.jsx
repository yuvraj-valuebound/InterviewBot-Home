import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-10 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="section-title">📬 Get in Touch</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-gray-500 text-xl"
        >
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="tel:+918109062156"
              className="hover:text-indigo-600 transition-colors"
            >
              📞 +91 8109062156
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="tanay@valuebound.com"
              className="hover:text-indigo-600 transition-colors"
            >
              📧 tanay@valuebound.com
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div
        className="absolute right-0 top-1/3 -translate-y-1/2 w-96 h-96 bg-indigo-100/30 
        rounded-full blur-3xl -z-10"
      ></div>
      <div
        className="absolute left-0 bottom-1/4 translate-y-1/2 w-96 h-96 bg-indigo-100/30 
        rounded-full blur-3xl -z-10"
      ></div>
    </section>
  );
};

export default Contact;
