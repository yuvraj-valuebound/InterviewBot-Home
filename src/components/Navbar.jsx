import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-700">AI Interviewer</div>
          <div className="hidden md:flex space-x-6"></div>
          <button
            className="btn-primary"
            onClick={() =>
              window.open(
                "https://vb-interviewer.vercel.app/dashboard",
                "_blank"
              )
            }
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    smooth={true}
    duration={500}
    className="text-gray-800 hover:text-blue-700 cursor-pointer"
  >
    {children}
  </Link>
);

export default Navbar;
