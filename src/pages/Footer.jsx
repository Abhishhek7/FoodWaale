import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribe, setSubscribe] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribeChange = (e) => {
    setSubscribe(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
    // Handle form submission logic here
  };

  return (
    <div className="bg-black text-white py-6 px-6 relative">
      {/* Main Content Section */}
      <div className="max-w-xl mx-auto text-center mb-4">
        <h2 className="text-2xl font-semibold mb-2">Write your email here</h2>
        
        {/* Email Input Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className="w-full p-3 text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          {/* Newsletter Subscription Checkbox */}
          <div className="flex items-center justify-center space-x-2">
            <input
              type="checkbox"
              id="subscribe"
              checked={subscribe}
              onChange={handleSubscribeChange}
              className="h-4 w-4 text-blue-600"
            />
            <label htmlFor="subscribe" className="text-sm">
              Yes, subscribe me to your newsletter
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-3 bg-blue-600 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-blue-700 transition duration-300"
          >
            Subscribe Now
          </button>
        </form>
      </div>

      {/* Social Media & Reach Us Section */}
      <div className="absolute bottom-6 right-6 flex flex-col items-center space-y-3">
        {/* Reach Us */}
        <div className="text-blue-800 text-2xl font-bold">
          <p>Reach Us</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
            <FaFacebookF className="text-xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-600">
            <FaInstagram className="text-xl" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
            <FaTwitter className="text-xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-700">
            <FaLinkedinIn className="text-xl" />
          </a>
        </div>
      </div>

      {/* Extra Space to Make Sure Footer is Visible */}
      <div className="mt-6 h-8"></div>
    </div>
  );
};

export default Footer;
