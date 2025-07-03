import React from "react";

const Projects = () => {
  const projectList = [
    {
      title: "Qoute Generator",
      description:
        "A web application that generates random inspirational quotes at the click of a button. Users can share their favorite quotes on social media or save them for later. Built with React and styled-components.",
      link: "https://qoute-generator-7e7bb.web.app/",
    },
    {
      title: "Flight Planning System",
      description:
        "A comprehensive system for planning flights, including details about available planes and hotels. Users can view plane specifications, book flights, and find nearby accommodations. Built with React",
      link: "https://travel-planner-b64a7.web.app/",
    },
    {
      title: "Weather App",
      description:
        "A weather application that displays the current weather conditions in a user's location. Users can also view the weather forecast. Built with HTML,CSS, and JS and the OpenWeatherMap API.",
      link: "https://codepen.io/Ibrahim-Abdul-quadri/full/YzbvXLv",
    },
    {
      title: "Quiz App",
      description:
        "A quiz application that allows users to test their knowledge on various topics. Users can select a category, answer multiple-choice questions, and receive their scores at the end. Built with HTML, CSS, and JavaScript.",
      link: "https://codepen.io/Ibrahim-Abdul-quadri/full/jOjEYyO",
    },
    {
      title: "Dictionary App",
      description:
        "A dictionary application that provides definitions, synonyms, and antonyms for words entered by the user. Users can also listen to the pronunciation of words. Built with HTML,CSS and Javascript",
      link: "https://codepen.io/Ibrahim-Abdul-quadri/full/wvbZZoP",
    },
    {
      title: "Lroomer",
      description: `Lroomer – a basic video chat app. The goal? Practice WebRTC, PeerJS, and Socket.io in a real-world use case. It connects two users randomly in a video call – kind of like Omegle, but minimalist and dev-friendly.`,
      link: "https://lroomer1.onrender.com",
    },
    {
      title: "Chatee",
      description: `a small side project that integrates Google’s Gemini API into a chat interface using React. 🧠 It supports both text +
image generation, remembers past chats via localStorage, and even compresses image data for performance. Clean
UI (React + Tailwind) Rehydrating chat sessions on load Markdown cleanup from Gemini responses Handling
prompt logic smartly ("generate image" triggers image output)multi-modal AI + frontend architecture. It includes
prompt handling, session design, and GenAI limitations.`,
      link: "https://chatee-ob6y.onrender.com/",
    },
    {
      title:"p2ptransfer",
      description: `A peer-to-peer file transfer application that allows users to send files directly to each other without the need for a server when they are on the same networks. It uses WebRTC for real-time communication and supports multiple file types.`,
      link: "https://p2ptransfer.onrender.com/",
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col font-mono items-center py-10">
      <div className="container max-w-6xl text-center px-4">
        <h2 className="text-2xl mb-8">
          Browse My Recent <span className="font-semibold">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="border cursor-pointer border-white p-6 rounded-lg transition-all duration-300 hover:bg-white hover:text-black"
            >
              <a href={project.link}>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-base">{project.description}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
