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
          <div className="text-2xl font-bold text-purple-700">AI Interview</div>
          <div className="hidden md:flex space-x-6">
            <NavLink to="home">Home</NavLink>
            <NavLink to="features">Features</NavLink>
            <NavLink to="pricing">Pricing</NavLink>
            <NavLink to="contact">Contact</NavLink>
          </div>
          <button className="btn-primary">Talk To Us</button>
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
    className="text-gray-800 hover:text-purple-700 cursor-pointer"
  >
    {children}
  </Link>
);

export default Navbar;
