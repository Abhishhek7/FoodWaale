import React from "react";
import backgroundImage from "../assets/menu.jpg";
import foodImage2 from "../assets/foodImage2.png";
import { useNavigate } from "react-router-dom";
const OnlineOrder = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Order Banner Section */}
      <div className="relative w-full h-[80vh]  flex items-center justify-start">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center  shadow-lg"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0  bg-opacity-50 rounded-lg"></div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-start text-left text-gray-700 px-12 max-w-lg">
          <h1 className="text-8xl  font-bold mb-4 drop-shadow-lg font-sans">
            ORDER NOW
          </h1>
          <p className="font-sans font-semibold text-3xl">EAT REAL,BE REAL</p>
        </div>

        {/* Floating 3D Image at Bottom-Right */}
        <div className="absolute z-[2] bottom-[-20%] right-[-10%] md:bottom-[-15%] md:right-[10%] w-48 h-48 md:w-75 md:h-75">
          <img
            src={foodImage2}
            alt="Food"
            className="w-full h-full object-cover transform rotate-6"
          />
        </div>
      </div>

      {/* Order Online Section */}
      <div
        className="relative w-full z-[1] py-24 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.greenrebel.ca/wp-content/themes/greenrebel/img/image.jpg')", // Background Image
        }}
      >
        {/* White Container - Adjusted for Better Layout */}
        <div className="relative bg-white bg-opacity-95 max-w-6xl mx-auto p-12 min-h-[650px] rounded-3xl shadow-2xl text-center overflow-hidden">
          {/* Section Heading */}
          <h2 className="text-5xl font-bold text-gray-900 mb-10 tracking-wide">
            Order Online
          </h2>

          {/* Food Category Grid - Smaller Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Heavy Food Box */}
            <div className="p-5 bg-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 cursor-pointer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2718/2718224.png"
                alt="Heavy Food"
                className="w-20 mx-auto mb-3"
              />
              <h3 className="text-2xl font-sans font-semibold text-gray-800 mb-2">
                Heavy Food
              </h3>
              <p className="text-gray-600 font-sans text-md">
                Satisfy your hunger with our filling and delicious meals.
              </p>
            </div>

            {/* Light Food Box */}
            <div className="p-5 bg-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 cursor-pointer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/184/184538.png"
                alt="Light Food"
                className="w-20 mx-auto mb-3"
              />
              <h3 className="text-2xl font-sans font-semibold text-gray-800 mb-2">
                Light Food
              </h3>
              <p className="text-gray-600 font-sans text-md">
                Enjoy healthy and light meals to keep you energized.
              </p>
            </div>

            {/* Smoothies Box */}
            <div className="p-5 bg-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 cursor-pointer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1046/1046786.png"
                alt="Smoothies"
                className="w-20 mx-auto mb-3"
              />
              <h3 className="text-2xl font-semibold font-sans text-gray-800 mb-2">
                Smoothies
              </h3>
              <p className="text-gray-600 font-sans text-md">
                Refresh yourself with our tasty and nutritious smoothies.
              </p>
            </div>
          </div>

          {/* Order Button - Reduced Size */}
          <button
            type="button"
            onClick={() => {
              console.log("Order Online");
              navigate("/orderdetails");
            }}
            className="adsolute z-10 text-3xl font-bold mt-6 cursor-pointer text-white bg-blue-600 px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Order Online
          </button>

          {/* 🍎 Apple Image on the Left */}
          <img
            src="https://www.greenrebel.ca/wp-content/themes/greenrebel/img/apple.png"
            alt="Apple"
            className="hidden md:block absolute bottom-[5px] left-[-10px] w-32 md:w-48 lg:w-56"
          />

          {/* 🍞 Breads Image on the Right */}
          <img
            src="https://www.greenrebel.ca/wp-content/themes/greenrebel/img/breads.png"
            alt="Breads"
            className="hidden md:block absolute bottom-[-20px] right-[-10px] w-32 md:w-48 lg:w-56"
          />
        </div>
      </div>      
    </>
  );
};

export default OnlineOrder;
