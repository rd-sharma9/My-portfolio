import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 md:px-20 py-16 bg-white scroll-mt-32 flex flex-col"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center md:text-left mb-8">
        About Me
      </h2>

      {/* Responsive Layout */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src="https://camo.githubusercontent.com/2366b34bb903c09617990fb5fff4622f3e941349e846ddb7e73df872a9d21233/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f3733303730332f73637265656e73686f74732f363538313234332f6176656e746f2e676966"
            alt="Developer GIF"
            className="max-w-xs md:max-w-md object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-lg md:text-xl leading-relaxed md:leading-loose text-gray-700">
            Hi! I'm <span className="font-semibold">Rudresh Sharma</span>, a
            front-end developer passionate about building responsive and dynamic web interfaces.
            I specialize in <span className="font-semibold">React</span> and{" "}
            <span className="font-semibold">Tailwind CSS</span>, and I enjoy
            transforming ideas into clean and efficient code.
            <br /><br />
            I’m constantly learning, exploring new technologies, and aiming to
            create experiences that are both functional and beautiful.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
