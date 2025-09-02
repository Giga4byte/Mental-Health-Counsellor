import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left: Brand */}
      <div className="text-2xl font-bold text-main-pink">Lenni</div>

      {/* Center: Navigation Links */}
      <ul className="flex gap-8 text-lg text-dark-pink font-medium">
        <li><a href="#about" className="hover:text-main-pink transition">About</a></li>
        <li><a href="#features" className="hover:text-main-pink transition">Features</a></li>
        <li><a href="#team" className="hover:text-main-pink transition">Team</a></li>
        <li><a href="#implementation" className="hover:text-main-pink transition">Implementation</a></li>
      </ul>

      {/* Right: CTA Button */}
      <button className="bg-main-pink hover:bg-main-blue text-white font-semibold py-2 px-6 rounded-full shadow transition duration-300">
        Chat with Lenni
      </button>
    </nav>
  );
};

export default Navbar;