import React, { useEffect, useState } from 'react';
import backgroundImage from '../assets/menu.jpg';
import { FaInstagram } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const testimonials = [
    {
      name: "John Doe",
      feedback: "Green Rebel changed the way I eat. Fresh and delicious!",
      insta: "@johndoe",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Jane Smith",
      feedback: "Amazing flavors and healthy options. Highly recommend!",
      insta: "@janesmith",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Mike Johnson",
      feedback: "A perfect mix of taste and health. Love this place!",
      insta: "@mikejohnson",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      name: "Emily Brown",
      feedback: "Fresh, organic, and delicious meals every time!",
      insta: "@emilybrown",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      name: "David Wilson",
      feedback: "Healthy eating made easy and tasty!",
      insta: "@davidwilson",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      name: "Sarah Lee",
      feedback: "The best salads and bowls! Super fresh ingredients.",
      insta: "@sarahlee",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      name: "Chris Evans",
      feedback: "Nutritious, delicious, and totally worth it!",
      insta: "@chrisevans",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      name: "Sophia White",
      feedback: "Love the flavors and the eco-friendly mission!",
      insta: "@sophiawhite",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
    },
  ];


  return (
    <>
      {/* About Banner Section */}
      <div className="relative w-full h-[80vh] flex items-center justify-start">
        
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center shadow-lg"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-opacity-50 rounded-lg"></div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-start text-left text-gray-700 px-12 max-w-lg">
          <h1 className="text-6xl font-bold mb-4 drop-shadow-lg font-sans">
            ABOUT FOODWALE
          </h1>
          <p className="font-sans font-semibold text-2xl">
            Real service.Real people.
          </p>
        </div>

        {/* Floating 3D Mushroom Image */}
        <div className="absolute bottom-[-15%] z-[2] right-[5%] md:bottom-[-25%] md:right-[20%] w-56 h-56 md:w-70 md:h-70">
          <img
            src="https://www.greenrebel.ca/wp-content/themes/greenrebel/img/mashrooms.png"
            alt="Mushrooms"
            className="w-full h-full object-cover transform rotate-6"
          />
        </div>
      </div>

      {/* Fixed Chalkboard Background Section */}
      <div
        className="relative w-full h-auto z-[1] py-32 bg-fixed bg-cover bg-center text-white"
        style={{
          backgroundImage: "url('https://www.greenrebel.ca/wp-content/themes/greenrebel/img/chalkboard.jpg')",
        }}
      >
        
        {/* Floating Text on Left */}
        <div className="max-w-3xl ml-20 mt-30 text-left">
          <h2 className="text-6xl font-extrabold mb-6 font-sans uppercase">Once Upon a Time</h2>
          <p className="text-lg font-sans uppercase font-bold leading-relaxed">
            Cofounders Mr. Abhishek and Rupesh had a renowned beachside bistro in New Zealand that served real food. Fresh, delicious, wholesome, authentic food which was sourced from a local produce stand called “The FOOD-WALE”.
          </p>
          <br />
          <p className="text-lg uppercase font-sans font-bold leading-relaxed">
            How fitting that name would end up to be. Upon their return to Canada, their passion and desire for healthy genuine eating increased and ultimately became contagious under the FOOD-WALE brand.
          </p>
        </div>
        

        {/* Floating Mushroom Image (Parallax Effect) */}
        <div
          className="absolute right-10 top-10 w-48 h-48 md:w-50 md:h-50"
          style={{
            transform: `translateY(${scrollY * -0.3}px)`, // Moves faster than the text
          }}
        >
          <img
            src="https://www.greenrebel.ca/wp-content/themes/greenrebel/img/mashroom.png"
            alt="Mushroom"
            className="w-full h-full object-cover"
          />
        </div>
{/* Texture Image with Text on Right Side */}
<div
  className="relative w-full h-[500px] bg-cover mt-40 flex items-center justify-end pr-16"
  style={{
    backgroundImage: "url('https://www.greenrebel.ca/wp-content/themes/greenrebel/img/texture-light.jpg')",
    backgroundSize: "contain", // Ensures proper scaling
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right center", // Keeps space on the left
  }}
>
  {/* Floating Radish Image in Left Section (Moving on Scroll) */}
  <div
    className="absolute left-[30%] top-0 w-28 h-28 md:w-36 md:h-36"
    style={{
      transform: `translateY(${scrollY * 0.3}px)`, // Moves downward on scroll
    }}
  >
    <img
      src="https://www.greenrebel.ca/wp-content/themes/greenrebel/img/radish.png"
      alt="Radish"
      className="w-full h-full object-contain"
    />
  </div>
{/* Text Content Over Background */}

  {/* Text Content in Right Section */}
  <div className="max-w-lg mb-10 mr-20 text-gray-700 font-sans text-right">
    <h2 className="text-4xl md:text-4xl font-bold uppercase mb-4">
      The Mission is Clear
    </h2>
    <p className="text-lg md:text-xl font-medium leading-relaxed">
      Feed people wholesome real ingredients that make the biggest impact in their lives. 
      Green Rebel creates the perfect eating environment for a casual yet efficient experience 
      with a full-service attitude.
    </p>
    <br />
    <p className="text-lg md:text-xl font-medium leading-relaxed">
      Not only do we care about what we put in our mouths, but we care about the 
      effect and consequences that food production has on the environment.
    </p>
  </div>
  

  {/* Beans Image on Top Right - Half Inside & Half Outside */}
  <div className="absolute top-[-40px] right-[-40px] w-36 h-36 md:w-48 md:h-48">
    <img
      src="https://www.greenrebel.ca/wp-content/themes/greenrebel/img/beans.png"
      alt="Beans"
      className="w-full h-full object-contain"
    />
  </div>

  {/* Fresh Icon Image on Bottom Center */}
  <div className="absolute bottom-[5px] left-1/2 transform -translate-x-1/2 w-24 h-24 md:w-32 md:h-32">
    <img
      src="https://www.greenrebel.ca/wp-content/themes/greenrebel/img/fresh-icon.png"
      alt="Fresh Icon"
      className="w-full h-full object-contain"
    />
  </div>
</div>

{/* Floating Pepper SVG BELOW the Texture Section */}
<div
  className="absolute left-1/2 transform -translate-x-1/2 bottom-[-200px] md:left-[20%] w-36 h-36 md:w-48 md:h-48"
  style={{
    transform: `translateY(${scrollY * -0.5}px)`, // Moves faster while scrolling
  }}
>
  <img
    src="https://www.greenrebel.ca/wp-content/themes/greenrebel/img/pepper.svg"
    alt="Pepper"
    className="w-full h-full object-contain"
  />
</div>
 {/* Roller Image BELOW Texture Section (Floating Effect) */}
 <div
        className="relative w-full flex justify-center mt-20"
        style={{
          transform: `translateY(${scrollY * -0.3}px)`, // Moves up slightly while scrolling
        }}
      >
        <img
          src="https://www.greenrebel.ca/wp-content/themes/greenrebel/img/roller.svg"
          alt="Rolling Pin"
          className="w-40 h-40 md:w-52 md:h-52 object-contain"
        />
      </div>
       {/* Left Section - Text */}
  <div className="absolute bottom-16 left-16 max-w-2xl text-white">
    <h1 className="text-4xl font-bold">Rebel Bowl Program</h1>
    <p className="text-lg mt-4">
      Let’s reduce packaging waste. The program is simple but effective. Green Rebel will knock 
      50 cents off the price of your salad every time you use a Rebel Bowl instead of a take-out container.
    </p>
    <Link to="/"><button className="mt-6 px-6 py-3 bg-green-600 cursor-pointer text-white font-semibold rounded-lg hover:bg-green-900 transition">
      Learn More
    </button>
    </Link>
  </div>

  {/* Basil Image - Slightly Lower than the Text */}
  <div className="absolute bottom-4 left-[52rem] w-40 h-40 md:w-52 md:h-52">
    <img
      src="https://www.greenrebel.ca/wp-content/themes/greenrebel/img/basil.png"
      alt="Basil"
      className="w-full h-full object-contain"
    />
  </div>
      </div>
      
      {/* Testimonials Section */}
<div className="w-full py-12 bg-gray-900 text-white">
  <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
  <Marquee pauseOnHover speed={50} gradient={false}>
    {testimonials.map((testimonial, index) => (
      <div key={index} className="bg-gray-800 rounded-lg shadow-md p-6 mx-4 min-w-[300px] max-w-[350px]">
        <div className="flex justify-center mb-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-20 h-20 rounded-full object-cover border-4 border-green-500"
          />
        </div>
        <h3 className="text-xl font-semibold text-center text-white">{testimonial.name}</h3>
        <p className="text-gray-300 text-center mt-2">{testimonial.feedback}</p>
        <div className="flex justify-center items-center gap-2 mt-4 text-green-400">
          <FaInstagram className="text-2xl" />
          <span className="text-lg font-medium">{testimonial.insta}</span>
        </div>
      </div>
    ))}
  </Marquee>
</div>

    </>
  );
};

export default About;
