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
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 mb-12 lg:mb-0 relative group"
          >
            {/* YouTube Video Thumbnail */}
            <div
              className="w-full rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 transform hover:scale-105"
              role="button"
              tabIndex="0"
              onClick={() =>
                window.open("https://youtube.com/your-video-url", "_blank")
              }
              onKeyPress={(e) =>
                e.key === "Enter" &&
                window.open("https://youtube.com/your-video-url", "_blank")
              }
            >
              <div className="relative pt-[56.25%]">
                {" "}
                {/* 16:9 aspect ratio */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url(/your-thumbnail-image.jpg)" }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-10">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <svg
                        className="w-12 h-12 text-red-600 ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2 lg:pl-16"
          >
            <h2 className="text-4xl font-bold mb-8 text-purple-700">
              About AI Interview Assistant
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're revolutionizing the hiring process with cutting-edge AI
              technology. Our platform provides unbiased, efficient, and
              comprehensive interview experiences for both employers and
              candidates.
            </p>
            <ul className="space-y-6 mb-8">
              <ListItem>
                Innovative AI-driven interviews that adapt to each candidate
              </ListItem>
              <ListItem>
                Time and cost-efficient hiring, reducing the recruitment cycle
                by up to 50%
              </ListItem>
              <ListItem>
                Comprehensive candidate evaluation across technical skills and
                soft skills
              </ListItem>
            </ul>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Our Impact</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <Stat number="500+" label="Companies Served" />
                <Stat number="10,000+" label="Interviews Conducted" />
                <Stat number="95%" label="Client Satisfaction" />
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ListItem = ({ children }) => (
  <motion.li
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="flex items-center text-lg"
  >
    <svg
      className="w-6 h-6 text-purple-700 mr-4"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    {children}
  </motion.li>
);

const Stat = ({ number, label }) => (
  <div>
    <div className="text-3xl font-bold text-purple-700">{number}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);

export default About;
