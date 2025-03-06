import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">AI Interview</h3>
            <p className="text-gray-400 leading-relaxed">
              Revolutionizing hiring through intelligent conversations
            </p>
            <div className="flex space-x-5">
              {[
                /* Social Icons */
              ].map((icon, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  href="#"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {/* Keep your existing SVG paths */}
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Navigation
            </h4>
            <ul className="space-y-4">
              {["Home", "Features", "Pricing", "About"].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors text-gray-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Resources
            </h4>
            <ul className="space-y-4">
              {["Blog", "Documentation", "Help Center", "API Status"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="hover:text-blue-400 transition-colors text-gray-400"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Stay Updated
            </h4>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 outline-none transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-sm text-gray-500"
        >
          <p>
            © {new Date().getFullYear()} AI Interview Assistant.
            <span className="mx-2">|</span>
            Crafted with <span className="text-red-400">♥</span> in India
          </p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900/50 to-transparent -z-10" />
    </footer>
  );
};

export default Footer;
