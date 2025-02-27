import React, { useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const Home = () => {
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY ); // Adjusted for better effect
    };
    window.addEventListener("scroll", handleScroll);

    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("https://static.wixstatic.com/media/9c608a_1d105a52d5834dfa98f0ead7697277f7.jpg")`,
            transform: `translateY(${offset * 0.5}px)`,
            backgroundAttachment: isMobile ? "scroll" : "fixed",
          }}
        ></div>
        <div className="absolute inset-0 bg-opacity-10"></div>
        <div className="relative text-center text-black px-4">
          <h1 className="text-8xl font-extrabold drop-shadow-xl">FOOD.</h1>
          <p className="mt-2 text-4xl font-bold drop-shadow-xl">
            It's the Simple Pleasures in Life.
          </p>
        </div>
        <div className="absolute bottom-5 w-full flex justify-center">
          <button
            onClick={handleScrollDown}
            className="bg-black text-white p-3 rounded-full cursor-pointer shadow-lg flex items-center justify-center hover:bg-gray-800 transition duration-300"
          >
            <ChevronDownIcon className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>

      {/* Discover More Section */}
      <div className="relative w-full min-h-[500px] flex flex-col items-center justify-center mt-10 px-6">
        <h2 className="text-6xl font-extrabold text-center mb-8">Discover More.</h2>
        <p className="text-3xl font-bold text-center mb-8">Explore the world of flavors.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl text-center">
          <div>
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg"
                alt="Exotic Cuisine"
                className="w-full h-60 object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mt-4">Exotic Cuisine</h3>
          </div>

          <div className="relative">
            <div className="bg-white shadow-lg rounded-2xl relative overflow-visible">
              <div className="absolute -top-5 -right-5 bg-green-600 text-white text-base font-bold px-6 py-3 rounded-lg shadow-md">
                Fresh
              </div>
              <img
                src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg"
                alt="Fresh Ingredients"
                className="w-full h-60 object-cover rounded-2xl"
              />
            </div>
            <h3 className="text-2xl font-bold mt-4 text-center">Fresh Ingredients</h3>
          </div>

          <div>
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3026809/pexels-photo-3026809.jpeg"
                alt="Sweet Treats"
                className="w-full h-60 object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mt-4">Sweet Treats</h3>
          </div>
        </div>

        <div className="mt-8">
        <Link to='/orderdetails'>  <button className="bg-black cursor-pointer text-white text-lg font-semibold px-6 mb-4 py-3 rounded-full shadow-lg hover:bg-gray-800 transition duration-300">
            Order Online
          </button>
          </Link>
        </div>
      </div>

      {/* Image Section (Parallax Effect) - Now Third */}
      <div className="relative w-full h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0  bg-cover bg-center"
          style={{
            backgroundImage: `url("https://cdn.pixabay.com/photo/2017/08/10/14/09/restaurant-2623071_1280.jpg")`,
            backgroundAttachment: isMobile ? "scroll" : "fixed",
            transform: `translateY(${offset * 0.1}px)`,
          }}
        ></div>
        
      </div>

    {/* About Us Section */}
<div className="relative w-full py-20 px-6 flex flex-col lg:flex-row-reverse items-center justify-center max-w-6xl mx-auto">
  {/* Image on the Right */}
  <div className="w-full lg:w-1/2">
    <img
      src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg"
      alt="About Us"
      className="w-full h-auto rounded-2xl shadow-lg"
    />
  </div>

  {/* Text on the Left */}
  <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pr-10 text-center lg:text-left">
    <h2 className="text-6xl font-extrabold mb-4 text-gray-900">About Us</h2>
    <p className="text-lg text-gray-700 leading-relaxed mb-6">
      At <span className="font-bold text-blue-700">FOODWALE</span>, we believe food is more than just a meal—it’s an experience. Our passion for cooking and sharing meals brings people together, and we take pride in offering dishes that are not only delicious but also bring joy to every table.
    </p>
    
    <Link to ="/about"><button className="bg-black cursor-pointer text-white text-lg font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-800 transition duration-300">
      Learn More
    </button>
    </Link> 
  </div>
</div>
{/* Our Story & Vision Section */}
<div className="relative w-full py-20 px-6 flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto">
  {/* Image on the Left */}
  <div className="w-full lg:w-1/2">
    <img
      src="https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg"
      alt="Our Story"
      className="w-full h-auto rounded-2xl shadow-lg"
    />
  </div>

  {/* Text on the Right */}
  <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-10 text-center lg:text-left">
    <h2 className="text-6xl font-extrabold mb-4 text-gray-900">Our Story & Vision</h2>
    <p className="text-lg text-gray-700 leading-relaxed mb-6">
      What started as a small passion project quickly turned into a culinary revolution.  
      <span className="font-bold text-blue-700"> FOODWALE</span> is built on a foundation of love for food, people, and culture.
    </p>
   <Link to="/about"> <button className="bg-black cursor-pointer text-white text-lg font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-800 transition duration-300">
      Discover More
    </button>
    </Link>
  </div>
</div>
<div>
      {/* Section with fixed background */}
      <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
        {/* Fixed background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("https://cdn.pixabay.com/photo/2018/10/21/14/09/restaurant-3762934_1280.jpg")`,
            backgroundAttachment: "fixed", // Keeps the background fixed
            height: "100%", // Ensure the background takes up the full section
            zIndex: -1, // Ensure background stays behind the content
          }}
        ></div>

        {/* Content Over Image */}
        <div className="relative z-10 text-center text-black px-4">
          <h1 className="text-8xl text-red-500 font-extrabold drop-shadow-xl">Visit</h1>
          <p className="mt-2 text-4xl font-bold drop-shadow-xl">
            Foodwale.
          </p>
        </div>
      </div>
{/* Reserve a Table Section */}
<div className="py-20 px-6 text-center bg-gray-100">
  <h2 className="text-4xl font-extrabold text-gray-900">Reserve a Table</h2>
  <p className="mt-4 text-xl text-gray-700 mb-8">
    Please fill in the details below to reserve your table.
  </p>

  {/* Form */}
  <form className="mt-8 flex flex-wrap justify-between max-w-6xl mx-auto items-center space-x-6 bg-white p-8 rounded-xl shadow-lg">
    {/* Party Size */}
    <div className="w-full sm:w-1/4 mb-4">
      <label htmlFor="party-size" className="block text-lg font-semibold text-gray-700 mb-2">
        Party Size
      </label>
      <select
        id="party-size"
        name="party-size"
        className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8+</option>
      </select>
    </div>

    {/* Date */}
    <div className="w-full sm:w-1/4 mb-4">
      <label htmlFor="reservation-date" className="block text-lg font-semibold text-gray-700 mb-2">
        Date
      </label>
      <input
        type="date"
        id="reservation-date"
        name="reservation-date"
        className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
      />
    </div>

    {/* Time */}
    <div className="w-full sm:w-1/4 mb-4">
      <label htmlFor="reservation-time" className="block text-lg font-semibold text-gray-700 mb-2">
        Time
      </label>
      <input
        type="time"
        id="reservation-time"
        name="reservation-time"
        className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
      />
    </div>

    {/* Submit Button */}
    <div className="w-full sm:w-auto mb-4">
      <button
        type="submit"
        className="w-full sm:w-auto bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
      >
        Reserve Now
      </button>
    </div>
  </form>
</div>

     
    </div>



    </>
  );
};

export default Home;
