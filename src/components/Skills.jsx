import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiVite, SiCplusplus } from "react-icons/si";

const Skill = () => {
  return (
    <section className="bg-blue-50 py-16 px-6 md:px-20" id="skills">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Skills</h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
        {/* HTML */}
        <div className="flex flex-col items-center text-orange-600">
          <FaHtml5 className="text-5xl mb-2" />
          <span className="text-sm font-semibold">HTML5</span>
        </div>

        {/* CSS */}
        <div className="flex flex-col items-center text-blue-600">
          <FaCss3Alt className="text-5xl mb-2" />
          <span className="text-sm font-semibold">CSS3</span>
        </div>

        {/* JavaScript */}
        <div className="flex flex-col items-center text-yellow-500">
          <FaJs className="text-5xl mb-2" />
          <span className="text-sm font-semibold">JavaScript</span>
        </div>

        {/* React */}
        <div className="flex flex-col items-center text-cyan-500">
          <FaReact className="text-5xl mb-2" />
          <span className="text-sm font-semibold">React</span>
        </div>

        {/* Tailwind */}
        <div className="flex flex-col items-center text-sky-400">
          <SiTailwindcss className="text-5xl mb-2" />
          <span className="text-sm font-semibold">Tailwind CSS</span>
        </div>

        {/* Vite */}
        <div className="flex flex-col items-center text-purple-500">
          <SiVite className="text-5xl mb-2" />
          <span className="text-sm font-semibold">Vite</span>
        </div>

        {/* Git */}
        <div className="flex flex-col items-center text-red-600">
          <FaGitAlt className="text-5xl mb-2" />
          <span className="text-sm font-semibold">Git</span>
        </div>

        {/* GitHub */}
        <div className="flex flex-col items-center text-gray-800">
          <FaGithub className="text-5xl mb-2" />
          <span className="text-sm font-semibold">GitHub</span>
        </div>

        {/* Python */}
        <div className="flex flex-col items-center text-green-700">
          <FaPython className="text-5xl mb-2" />
          <span className="text-sm font-semibold">Python</span>
        </div>

        {/* C++ */}
        <div className="flex flex-col items-center text-blue-800">
          <SiCplusplus className="text-5xl mb-2" />
          <span className="text-sm font-semibold">C++</span>
        </div>
      </div>
    </section>
  );
};

export default Skill;
