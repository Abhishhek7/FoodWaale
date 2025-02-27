import React, { useState } from "react";
import backgroundImage from "../assets/menu.jpg";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  // Regex patterns
  const nameRegex = /^[a-zA-Z\s]+$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const messageRegex = /^.{10,}$/;

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    switch (name) {
      case "name":
        setErrors({ ...errors, name: nameRegex.test(value) ? "" : "Only letters and spaces allowed" });
        break;
      case "email":
        setErrors({ ...errors, email: emailRegex.test(value) ? "" : "Enter a valid email" });
        break;
      case "message":
        setErrors({ ...errors, message: messageRegex.test(value) ? "" : "Minimum 10 characters required" });
        break;
      default:
        break;
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.name && !errors.email && !errors.message) {
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Please fix the errors before submitting.");
    }
  };

  return (
    <>
      {/* Contact Banner Section */}
      <div className="relative w-full h-[80vh] flex items-center justify-start">
        <div className="absolute inset-0 bg-cover bg-center  shadow-lg" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
        <div className="absolute inset-0   rounded-lg"></div>
        <div className="relative z-10 flex flex-col items-start text-left text-white px-12 max-w-lg">
          <h1 className="text-6xl font-bold mb-4 drop-shadow-lg text-gray-700 font-sans">CONTACT US</h1>
          <p className="font-sans font-semibold text-gray-700 text-2xl">We're here to help. Reach out to us!</p>
        </div>
        <div className="absolute bottom-[-15%] right-[5%] md:bottom-[-25%] md:right-[20%] w-56 h-56 md:w-70 md:h-70">
          <img src="https://www.greenrebel.ca/wp-content/themes/greenrebel/img/eggplant.png" alt="Mushrooms" className="w-full h-full object-cover transform rotate-6" />
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 relative">
        {/* Contact Info Section */}
        <div className="bg-white p-8 rounded-lg shadow-xl border-l-8 border-green-600 relative">
          <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-lg text-gray-600 mt-4">Have questions? We'd love to hear from you. Whether it's feedback or inquiries, reach out anytime!</p>

          <div className="mt-6 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-green-600 text-white rounded-full"><FaPhoneAlt className="text-xl" /></div>
              <span className="text-lg text-gray-700">+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-green-600 text-white rounded-full"><FaEnvelope className="text-xl" /></div>
              <span className="text-lg text-gray-700">contact@foodwale.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-green-600 text-white rounded-full"><FaMapMarkerAlt className="text-xl" /></div>
              <span className="text-lg text-gray-700">123 Food Street, Culinary City, FC 45678</span>
            </div>
          </div>

          {/* Carrot Image Positioned at the Bottom Left */}
          <div className="absolute -bottom-16 -left-10 w-52 md:w-60">
            <img src="https://www.greenrebel.ca/wp-content/themes/greenrebel/img/carrot-2.png" alt="Carrot" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800">Send Us a Message</h2>
          <p className="text-lg text-gray-600 mt-2">Fill out the form below, and we'll get back to you as soon as possible.</p>

          <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="text-lg text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 mt-2 border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition shadow-sm`}
                placeholder="Your Name"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div>
              <label className="text-lg text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 mt-2 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition shadow-sm`}
                placeholder="Your Email"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <label className="text-lg text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className={`w-full p-3 mt-2 border ${errors.message ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition shadow-sm`}
                placeholder="Your Message"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>
          <Link>  <button type="submit" className="w-full px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition">
              Send Message
            </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
