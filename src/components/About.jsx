import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import AboutImage from "../assets/hero-image.jpg";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt=""
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8 text-justify">
            I am a driven and proactive undergraduate student working towards a Bachelor of Information and Communication Technology (Honors) from the Faculty of Technology at the University of Ruhuna. With a robust foundation in software development, enhanced by strong communication and interpersonal skills, I am dedicated to engaging in real-world projects that sharpen my professional capabilities. Committed to continuous learning and professional growth, I am on a path to excel as a skilled and accomplished software engineer.
            </p>
            
          <div className="mt-12 flex justify-center space-x-12">
                <a
                  href="https://github.com/Ashen694"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center hover:scale-110 transition-transform"
                >
                  <div className="text-5xl mb-2 text-gray-300 hover:text-white">
                    <FaGithub />
                  </div>
                  <p>GitHub</p>
                </a>

                <a
                  href="https://www.linkedin.com/in/ashen-kavindu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center hover:scale-110 transition-transform"
                >
                  <div className="text-5xl mb-2 text-blue-500 hover:text-blue-600">
                    <FaLinkedin />
                  </div>
                  <p>LinkedIn</p>
                </a>

                <a
                  href="https://facebook.com/ashen.kavindu.73/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center hover:scale-110 transition-transform"
                >
                  <div className="text-5xl mb-2 text-blue-700 hover:text-blue-800">
                    <FaFacebook />
                  </div>
                  <p>Facebook</p>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
