import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    company: "Tech Corp",
    quote:
      "AI Interview Assistant has revolutionized our hiring process. We've seen a 40% increase in quality hires and reduced our time-to-hire by half.",
    image: "/john-doe.jpg",
  },
  {
    name: "Jane Smith",
    company: "Innovate Inc",
    quote:
      "The insights provided by this tool are invaluable. It's like having an expert interviewer on our team, available 24/7.",
    image: "/jane-smith.jpg",
  },
  {
    name: "Mike Johnson",
    company: "Future Systems",
    quote:
      "We've cut our hiring time in half while improving the quality of our candidates. The AI's ability to assess technical skills is impressive.",
    image: "/mike-johnson.jpg",
  },
  {
    name: "Sarah Lee",
    company: "Global Solutions",
    quote:
      "The customization options are fantastic. We've been able to tailor the interview process to our specific needs and company culture.",
    image: "/sarah-lee.jpg",
  },
  {
    name: "David Chen",
    company: "InnovateTech",
    quote:
      "The behavioral assessment feature has been a game-changer for us. We're now able to evaluate soft skills much more effectively.",
    image: "/david-chen.jpg",
  },
  {
    name: "Emily Brown",
    company: "NextGen Startup",
    quote:
      "As a startup, we needed an efficient hiring solution. AI Interview Assistant has exceeded our expectations in every way.",
    image: "/emily-brown.jpg",
  },
];

const Testimonial = ({ name, company, quote, image }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="px-2" // Reduced horizontal padding
  >
    <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center mb-4">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-full mr-4 object-cover"
          />{" "}
          {/* Increased image size */}
          <div>
            <h4 className="font-semibold text-lg">{name}</h4>{" "}
            {/* Increased font size */}
            <p className="text-sm text-gray-600">{company}</p>
          </div>
        </div>
        <p className="text-gray-600 italic flex-grow text-base leading-relaxed">
          {quote}
        </p>{" "}
        {/* Adjusted text size and line height */}
      </div>
      <div className="mt-4 text-purple-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {" "}
        {/* Reduced horizontal padding */}
        <h2 className="text-4xl font-bold mb-6 text-center text-purple-700">
          What Our Clients Say
        </h2>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Hear from companies that have transformed their hiring process with AI
          Interview Assistant
        </p>
        <div className="h-[300px]">
          {" "}
          {/* Increased height */}
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="h-full">
                <Testimonial {...testimonial} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
