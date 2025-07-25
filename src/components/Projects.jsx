import React from "react";
import { motion } from "framer-motion";
import chatbotImg from "../assets/chatbot.jpg";

const projects = [
  {
    id: 1,
    title: "Project One",
    image: chatbotImg,
    code: "https://github.com/your-repo1",
    demo: "https://your-deploy-link1.com",
  },
  {
    id: 2,
    title: "Project Two",
    image: "https://via.placeholder.com/300x180",
    code: "https://github.com/your-repo2",
    demo: "https://your-deploy-link2.com",
  },
  {
    id: 3,
    title: "Project Three",
    image: "https://via.placeholder.com/300x180",
    code: "https://github.com/your-repo3",
    demo: "https://your-deploy-link3.com",
  },
  {
    id: 4,
    title: "Project Four",
    image: "https://via.placeholder.com/300x180",
    code: "https://github.com/your-repo4",
    demo: "https://your-deploy-link4.com",
  },
];

// Framer Motion animation variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Project = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 md:px-20 py-16 bg-blue-50"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Projects
      </h2>

      <motion.div
        className="grid md:grid-cols-2 gap-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map(({ id, title, image, code, demo }) => (
          <motion.div
            key={id}
            className="relative group bg-white p-4 rounded-xl shadow-lg overflow-hidden transition-all duration-500"
            variants={card}
            whileHover={{ y: -6 }}
            whileTap={{ y: -12 }}
          >
            {/* Blue fill effect from bottom */}
            <div className="absolute inset-0 bg-blue-600 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 z-0 rounded-xl" />

            {/* Background image fade-in */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-20 transition duration-500 z-0 rounded-xl"
              style={{ backgroundImage: `url(${image})` }}
            ></div>

            {/* Optional dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-30 transition duration-500 z-0 rounded-xl" />

            {/* Foreground content */}
            <div className="relative z-10">
              <img
                src={image}
                alt={title}
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-white transition duration-300">
                {title}
              </h3>
              <div className="flex gap-4">
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
                >
                  Code
                </a>
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition"
                >
                  Deploy
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Project;
