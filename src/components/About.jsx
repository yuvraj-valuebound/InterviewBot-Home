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
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-3/5"
          >
            <img
              src="/assets/panel.png"
              alt="AI Screening Dashboard"
              className="w-full h-[420px] rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2 lg:pl-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-blue-700">
            An interview is worth a thousand ATS keywords.
            </h2>
            <ul className="space-y-6">
              <li className="flex items-center text-lg">
                ✅ Rank real skills, not keywords.
              </li>
              <li className="flex items-center text-lg">
                ✅ Auto-screen every applicant. You see only the best.
              </li>
              <li className="flex items-center text-lg">
                ✅ Screen for any role. No setup required.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
