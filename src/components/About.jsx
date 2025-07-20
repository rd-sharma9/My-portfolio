import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="px-6 md:px-20 py-16 bg-white flex flex-col items-center text-center"
    >
      {/* Section Heading */}
      <h2 className="text-4xl md:text-6xl font-extrabold text-blue-700 mb-8">
        About Me
      </h2>

      {/* Description */}
      <p className="text-gray-700 text-lg md:text-2xl leading-relaxed max-w-4xl font-[500]">
        Hello! I'm <span className="font-semibold text-blue-700">Rudresh Sharma</span>, a highly motivated and creative Frontend Developer with a strong passion for crafting engaging user interfaces and seamless user experiences.
        <br /><br />
        I specialize in building responsive, intuitive websites using technologies like <span className="font-medium text-blue-600">React</span>, <span className="font-medium text-blue-600">Tailwind CSS</span>, and <span className="font-medium text-blue-600">JavaScript</span>. I enjoy turning creative ideas into smooth, interactive experiences in the browser.
        <br /><br />
        I'm always eager to learn, improve, and work on impactful projects that make a difference.
      </p>
    </section>
  );
};

export default About;
