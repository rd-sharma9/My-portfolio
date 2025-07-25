import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Side - Name */}
        <h3 className="text-xl font-semibold">© {new Date().getFullYear()} Rudresh Sharma</h3>

        {/* Right Side - Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/rd-sharma9"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition-transform transform hover:scale-110"
          >
            <Github size={28} />
          </a>

          <a
            href="https://www.linkedin.com/in/rudreshsharma533"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition-transform transform hover:scale-110"
          >
            <Linkedin size={28} />
          </a>

          <a
            href="mailto:rudreshsharma533@gmail.com"
            className="hover:text-gray-200 transition-transform transform hover:scale-110"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
