import React from "react";
import Kingsman from "../assets/kingsman-cafe.png";
import sunfly from "../assets/sunfly.png";
import bidzone from "../assets/BidZone.png";

const projects = [
  {
    id: 1,
    name: "Kingsman Cafe",
    technologies: "This project was developed for a real client based in Mirissa to digitalize the manual operations of their café.",
    image: Kingsman,
    github: "https://github.com/FOT-level-3-group-project/Cafe-and-event-management-system.git",
  },
  {
    id: 2,
    name: "SunFly Room Management",
    technologies: "SunFly Room Management – A smart and user-friendly room booking system developed as a university project using React, Spring Boot, and MySQL.",
    image: sunfly,
    github: "https://github.com/Team-404-FOT/SunFly-Room-Management.git",
  },
  {
    id: 3,
    name: "BidZone Auction System",
    technologies: "A web-based application developed using Java, HTML, and CSS. It enables users to participate in real-time product bidding with features like secure login and efficient auction management.",
    image: bidzone,
    github: "https://github.com/Ashen694/Bidzone-Auction-System.git",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
