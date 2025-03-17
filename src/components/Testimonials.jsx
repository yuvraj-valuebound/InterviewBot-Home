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
      "I used to spend HOURS screening resumes—now? AI does it in minutes. The accuracy? Unreal. No more fake candidates. No more guesswork.",
    image: "/assets/suchi_img.jpg",
  },
  {
    name: "Sana Amjad",
    company: "HR Manager",
    quote:
      "This changed everything. Candidates can’t fake their way in anymore. The AI spots cheaters, ranks real talent, and we just hire the best. It’s that simple.",
    image: "/assets/sana_img.jpg",
  },
  {
    name: "Puja Kumari",
    company: "HRMO",
    quote:
      "We thought we had a hiring process. Turns out, we had a broken system. This AI screening? It’s like having an unfair advantage in hiring.",
    image: "/assets/puja_img.jpg",
  },
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
      <div className="mt-4 text-blue-600">
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
        <h2 className="text-4xl font-bold mb-6 text-center text-blue-600">
          Let our customers speak for us.
        </h2>
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
