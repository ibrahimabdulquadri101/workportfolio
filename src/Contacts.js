import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-mono items-center py-12">
      <h1 className="text-4xl font-bold mb-4">Ibrahim AbdulQuadri Abiodun</h1>
      <h2 className="text-2xl font-semibold mb-8">Get In Touch</h2>

      <div className="flex flex-col md:flex-row justify-between w-full max-w-5xl px-4">
        {/* Left Section: Contact Info */}
        <div className="flex-1 mb-8 md:mb-0">
          <p className="mb-6">
            Just send me a message whenever and however you want, and we will
            start our cooperation.
          </p>
          <p className="mb-4">
            <span className="font-bold">MY PHONE:</span> +234 7045937611
          </p>
          <p className="mb-4">
            <span className="font-bold">EMAIL:</span>{" "}
            <a
              href="mailto:ibrahimabdulquadri446@gmail.com"
              className="underline text-blue-500"
            >
              ibrahimabdulquadri446@gmail.com
            </a>
          </p>
        </div>

        {/* Right Section: Contact Form */}
        <div className="flex-1">
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="NAME"
              className="bg-black border border-gray-600 text-white py-2 px-4 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="email"
              placeholder="EMAIL"
              className="bg-black border border-gray-600 text-white py-2 px-4 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <textarea
              placeholder="YOUR MESSAGE"
              rows="5"
              className="bg-black border border-gray-600 text-white py-2 px-4 focus:outline-none focus:ring-2 focus:ring-white"
            ></textarea>
            <button
              type="submit"
              className="bg-white text-black py-2 px-4 font-bold hover:bg-gray-200 transition duration-200"
            >
              SEND
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-6 mt-12">
        <a
          href="#"
          className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition duration-200"
        >
          <i className="fab fa-discord"></i>
        </a>
        <a
          href="#"
          className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition duration-200"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="#"
          className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition duration-200"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="#"
          className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition duration-200"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
