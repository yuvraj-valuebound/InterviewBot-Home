import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-gray-100 py-20"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Visual Component: Illustrative GIF */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-3/5"
          >
            <img
              src="/assets/protor.png"
              alt="AI Interview Assistant"
              className="w-full h-[420px] rounded-lg shadow-lg animate-float"
            />
          </motion.div>

          {/* Copy Component */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2 lg:pl-16"
          >
            <h2 className="text-4xl font-bold mb-2 text-blue-700">
              You’re Being Fooled.
            </h2>
            <h3 className="text-2xl font-semibold mb-8 text-gray-800">
              Fake Candidates. Fake Skills. Fake Interviews.
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Resumes lie. Candidates cheat. Interviews are gamed. AI-powered
              proctoring exposes deception instantly. No more bad hires.
            </p>
            <ul className="space-y-6 mb-8">
              <li className="flex items-center text-lg">
                <svg
                  className="w-6 h-6 text-blue-700 mr-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                AI tracks eye & face movements. Detects distractions instantly
              </li>
              <li className="flex items-center text-lg">
                <svg
                  className="w-6 h-6 text-blue-700 mr-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                ID verification ensures no imposters. Hire who you actually
                interviewed.
              </li>
              <li className="flex items-center text-lg">
                <svg
                  className="w-6 h-6 text-blue-700 mr-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Auto-Flag suspicious behavior. 5 tab switches? Interview
                terminated.
              </li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              onClick={() =>
                window.open(
                  "https://vb-interviewer.vercel.app/dashboard",
                  "_blank"
                )
              }
            >
              Secure Your Hiring Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
