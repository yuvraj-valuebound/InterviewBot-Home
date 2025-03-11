import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Suchandhini",
    company: "HR Manager, Valuebound",
    quote:
      "AI Interview Assistant has revolutionized our hiring process. We've seen a 40% increase in quality hires and reduced our time-to-hire by half.",
    image: "/assets/suchi_img.jpg",
  }
];

const Testimonial = ({ name, company, quote, image }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="px-2"
  >
    <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center mb-4">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-full mr-4 object-cover"
          />
          <div>
            <h4 className="font-semibold text-lg">{name}</h4>
            <p className="text-sm text-gray-600">{company}</p>
          </div>
        </div>
        <p className="text-gray-600 italic flex-grow text-base leading-relaxed">
          {quote}
        </p>
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
  const hasMultiple = testimonials.length > 1;
  const settings = {
    dots: true,
    infinite: hasMultiple,
    speed: 500,
    slidesToShow: hasMultiple ? 3 : 1,
    slidesToScroll: 1,
    autoplay: hasMultiple,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: hasMultiple ? 2 : 1,
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
    <section className="pt-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center text-purple-700">
          What Our Clients Say
        </h2>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Hear from companies that have transformed their hiring process with AI Interview Assistant
        </p>
        <div className="h-[300px]">
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
