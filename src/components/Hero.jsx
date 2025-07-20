import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImg from "../assets/Profile.jpeg"; // Confirm the path is correct

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-10 bg-gradient-to-b from-white to-blue-50">
      {/* Text Content */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-blue-700">Rudresh Sharma</span>
        </h1>

        <p className="text-gray-700 text-lg md:text-xl mb-6">
          A passionate Frontend Developer crafting clean, responsive, and
          interactive web experiences.
        </p>

        {/* Social Icons + Resume Button */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 md:gap-6">
          <div className="flex gap-6">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="text-3xl text-gray-700 hover:text-blue-700 transition duration-300" />
            </a>
            <a
              href="https://linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-3xl text-blue-700 hover:text-blue-900 transition duration-300" />
            </a>
          </div>

          <a
            href="/resume.pdf" // Replace with your resume file path
            download
            className="mt-3 md:mt-0 px-4 py-2 bg-blue-700 text-white text-base font-semibold rounded-md shadow hover:bg-blue-800 transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Image Section */}
<div className="mb-10 md:mb-0 flex justify-center md:justify-end">
  <div className="w-80 h-auto md:w-[22rem] rounded-xl overflow-hidden shadow-xl bg-white">
    <img
      src={profileImg}
      alt="Rudresh Sharma"
      className="w-full h-auto object-cover object-top"
    />
  </div>
</div>

    </section>
  );
};

export default Hero;
