import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">📬 Get in Touch</h2>
          <p className="text-gray-500 text-lg">
            Let's discuss how we can transform your hiring process
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-sm p-10 border border-gray-100"
        >
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-md font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 
                    focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all
                    placeholder-gray-400 text-gray-700"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label className="text-md font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 
                    focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all
                    placeholder-gray-400 text-gray-700"
                  placeholder="hello@company.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-md font-medium text-gray-600">
                Message
              </label>
              <textarea
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 
                  focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all
                  placeholder-gray-400 text-gray-700"
                placeholder="Share your thoughts with us..."
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full btn-primary text-white py-4 px-8 
                rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              type="submit"
            >
              Send Message
              <span className="ml-2">✉️</span>
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12 text-gray-500 text-sm"
        >
          <p>Prefer direct contact?</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="tel:+1234567890"
              className="hover:text-blue-600 transition-colors"
            >
              📞 +1 (234) 567-890
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="mailto:hello@company.com"
              className="hover:text-blue-600 transition-colors"
            >
              📧 hello@company.com
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div
        className="absolute right-0 top-1/3 -translate-y-1/2 w-96 h-96 bg-blue-100/30 
        rounded-full blur-3xl -z-10"
      ></div>
      <div
        className="absolute left-0 bottom-1/4 translate-y-1/2 w-96 h-96 bg-purple-100/30 
        rounded-full blur-3xl -z-10"
      ></div>
    </section>
  );
};

export default Contact;
