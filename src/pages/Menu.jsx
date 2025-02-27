import React from "react";
import backgroundImage from "../assets/menu.jpg";
import foodImage from "../assets/carrot.png"; // Ensure correct path
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <>
      {/* Banner Section */}
<div className="relative w-full h-[80vh] flex items-center justify-start">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center  shadow-lg"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  ></div>

  {/* Dark Overlay */}
  <div className="absolute inset-0  bg-opacity-50 rounded-lg"></div>

  {/* Text Content */}
  <div className="relative z-10 flex flex-col items-start text-left text-gray-700 px-12 max-w-lg">
    <h1 className="text-4xl font-bold mb-4 drop-shadow-lg font-sans">Welcome to Our Menu</h1>
    <p className="font-sans text-lg">
      Explore our carefully crafted dishes made with the freshest ingredients.  
      From appetizers to desserts, we have something for every taste!
    </p>
   <Link to="/orders"> <button className=" cursor-pointer mt-6 px-6 py-3 font-sans bg-red-600 hover:bg-red-700 rounded-full text-lg font-semibold transition">
      View Menu
    </button>
    </Link>
  </div>



        {/* Floating 3D Image at Bottom-Right */}
        <div className="absolute bottom-[-20%] right-[-10%] md:bottom-[-25%] md:right-[10%] w-48 h-48 md:w-75 md:h-75">
          <img
            src={foodImage}
            alt="Food"
            className="w-full h-full object-cover  transform rotate-6"
          />
        </div>
      </div>

      {/* Fixed Background Section */}
      <div
        className="w-full h-screen bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('https://www.greenrebel.ca/wp-content/themes/greenrebel/img/bimg-10.jpg')" }}
      >
        {/* Fixed content */}
      </div>

      {/* White Background Div for Menu Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
        <h2 className="text-3xl font-sans font-semibold text-center text-gray-800 mb-8 underline decoration-red-600 hover:decoration-blue-600">
  Starter Section
</h2>


          {/* Starters Section */}
          <div className="mb-8">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Starter 1 */}
              <div className="bg-white rounded-md shadow-lg overflow-hidden transition-transform hover:scale-105">
                <img
                  src="https://images.pexels.com/photos/30708538/pexels-photo-30708538/free-photo-of-delicious-italian-bruschetta-with-fresh-ingredients.jpeg?auto=compress&cs=tinysrgb&w=600" // Pexels Image of Bruschetta
                  alt="Starter 1"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className=" font-sans text-2xl font-semibold text-gray-800">Bruschetta</h4>
                <p className="text-gray-600 mt-2 text-xl font-sans">Toasted bread topped with tomato, garlic, and basil.</p>
                <p className="mt-2 text-red-600 font-semibold">$7.99</p>
              </div>

              {/* Starter 2 */}
              <div className="bg-white rounded-md shadow-lg overflow-hidden transition-transform hover:scale-105">
                <img
                  src="https://images.pexels.com/photos/5950435/pexels-photo-5950435.jpeg?auto=compress&cs=tinysrgb&w=600" // Pexels Image of Stuffed Mushrooms
                  alt="Starter 2"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="text-2xl font-sans font-semibold text-gray-800">Stuffed Mushrooms</h4>
                <p className="text-gray-600 mt-2 text-xl font-sans">Mushrooms filled with cheese and herbs, baked to perfection.</p>
                <p className="mt-2 text-red-600 font-semibold">$8.99</p>
              </div>

              {/* Starter 3 */}
              <div className="bg-white rounded-md shadow-lg overflow-hidden transition-transform hover:scale-105">
                <img
                  src="https://images.pexels.com/photos/1352264/pexels-photo-1352264.jpeg?auto=compress&cs=tinysrgb&w=600" // Pexels Image of Fries
                  alt="Starter 3"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="text-2xl font-sans font-semibold text-gray-800">French Fries</h4>
                <p className="text-gray-600 mt-2 text-xl font-sans">Crispy fries served with ketchup and mayo dip.</p>
                <p className="mt-2 text-red-600 font-semibold">$4.99</p>
              </div>

              {/* Starter 4 */}
              <div className="bg-white rounded-md shadow-lg overflow-hidden transition-transform hover:scale-105">
                <img
                  src="https://images.pexels.com/photos/11299743/pexels-photo-11299743.jpeg?auto=compress&cs=tinysrgb&w=600" // Pexels Image of Chicken Wings
                  alt="Starter 4"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="text-2xl font-sans font-semibold text-gray-800">Chicken Wings</h4>
                <p className="text-gray-600 text-xl font-sans mt-2">Spicy chicken wings with a side of blue cheese dressing.</p>
                <p className="mt-2 text-red-600 font-semibold">$9.99</p>
              </div>

             

            </div>
          </div>

        </div>
      </div>
      {/* Fixed Background Section for Next Section */}
<div
  className="w-full h-screen bg-fixed bg-cover bg-center"
  style={{
    backgroundImage: "url('https://www.greenrebel.ca/wp-content/themes/greenrebel/img/bimg-1.jpg')", // Replace with your image URL
  }}
>
  
</div>
{/* Menu Section with Food Items */}
<div className="bg-white py-16">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8 underline decoration-red-600 hover:decoration-blue-600">
      Our Menu
    </h2>

    <div className="mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Food Item 1 */}
        <div className="bg-white rounded-md shadow-lg overflow-hidden transition-transform hover:scale-105">
          <img
            src="https://images.pexels.com/photos/12737817/pexels-photo-12737817.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Food Item 1"
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="p-4 text-center">
          <h4 className="text-2xl font-semibold text-gray-800 font-sans">Chicken Biryani</h4>
          <p className="text-gray-600 text-xl font-sans mt-2">Aromatic basmati rice with tender chicken, spices, and herbs.</p>
          <p className="mt-2 text-red-600 font-semibold">$12.99</p>
        </div>

        {/* Food Item 2 */}
        <div className="bg-white rounded-md shadow-lg overflow-hidden transition-transform hover:scale-105">
          <img
            src="https://images.pexels.com/photos/9738981/pexels-photo-9738981.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Food Item 2"
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="p-4 text-center">
          <h4 className="text-2xl font-sans font-semibold text-gray-800">Butter Chicken</h4>
          <p className="text-gray-600 text-xl font-sans mt-2">Creamy tomato-based sauce with grilled chicken pieces.</p>
          <p className="mt-2 text-red-600 font-semibold">$13.49</p>
        </div>

        {/* Food Item 3 */}
        <div className="bg-white rounded-md shadow-lg overflow-hidden transition-transform hover:scale-105">
          <img
            src="https://images.pexels.com/photos/9609847/pexels-photo-9609847.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Food Item 3"
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="p-4 text-center">
          <h4 className="text-2xl font-semibold text-gray-800">Mutton Biryani</h4>
          <p className="text-gray-600 text-xl font-sans mt-2">Spicy and flavorful rice with tender mutton and aromatic spices.</p>
          <p className="mt-2 text-red-600 font-semibold">$14.99</p>
        </div>

        {/* Food Item 4 */}
        <div className="bg-white rounded-md shadow-lg overflow-hidden transition-transform hover:scale-105">
          <img
            src="https://images.pexels.com/photos/1422384/pexels-photo-1422384.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Food Item 4"
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="p-4 text-center">
          <h4 className="text-2xl font-sans font-semibold text-gray-800">Sushi</h4>
          <p className="text-gray-600 text-xl font-sans mt-2">Fresh fish with vinegared rice, rolled with seaweed.</p>
          <p className="mt-2 text-red-600 font-semibold">$15.99</p>
        </div>

        {/* Food Item 5 */}
        <div className="bg-white rounded-md shadow-lg overflow-hidden transition-transform hover:scale-105">
          <img
            src="https://images.pexels.com/photos/20422195/pexels-photo-20422195/free-photo-of-meal-on-plate.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Food Item 5"
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="p-4 text-center">
          <h4 className="text-2xl font-sans font-semibold text-gray-800">Tandoori Chicken</h4>
          <p className="text-gray-600 text-xl font-sans mt-2">Chargrilled chicken marinated in a blend of yogurt and spices.</p>
          <p className="mt-2 text-red-600 font-semibold">$11.49</p>
        </div>

        {/* Food Item 6 */}
        <div className="bg-white rounded-md shadow-lg overflow-hidden transition-transform hover:scale-105">
          <img
            src="https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Food Item 6"
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="p-4 text-center">
          <h4 className="text-2xl font-sans font-semibold text-gray-800">Falafel</h4>
          <p className="text-gray-600 text-xl font-sans mt-2">Crispy deep-fried chickpea patties served with pita and tahini.</p>
          <p className="mt-2 text-red-600 font-semibold">$8.49</p>
        </div>

        {/* Food Item 7 */}
        <div className="bg-white rounded-md shadow-lg overflow-hidden transition-transform hover:scale-105">
          <img
            src="https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Food Item 7"
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="p-4 text-center">
          <h4 className="text-2xl font-sans font-semibold text-gray-800">Veggie Burger</h4>
          <p className="text-gray-600 text-xl font-sans mt-2">A healthy veggie patty served with fresh greens.</p>
          <p className="mt-2 text-red-600 font-semibold">$8.49</p>
        </div>

        {/* Food Item 8 */}
        <div className="bg-white rounded-md shadow-lg overflow-hidden transition-transform hover:scale-105">
          <img
            src="https://images.pexels.com/photos/15059056/pexels-photo-15059056/free-photo-of-a-bowl-of-rice-with-vegetables-and-sauce.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Food Item 8"
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="p-4 text-center">
          <h4 className="text-2xl font-sans font-semibold text-gray-800">Biryani Pulao</h4>
          <p className="text-gray-600 text-xl font-sans mt-2">Fragrant rice dish with mixed vegetables and spices.</p>
          <p className="mt-2 text-red-600 font-semibold">$9.99</p>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Smoothie Menu Section with Fixed Background Image */}
<div
  className="bg-fixed bg-cover py-40"
  style={{
    backgroundImage:
      'url("https://www.greenrebel.ca/wp-content/themes/greenrebel/img/bimg-3.jpg")',
  }}
>
  {/* Container with White Background */}
  <div className="bg-white py-16">
    <div className="container mx-auto px-6">
      {/* Smoothie Section Title */}
      <h2 className="text-3xl font-sans font-semibold text-center text-gray-800 mb-8 underline decoration-red-600 hover:decoration-blue-600">
        Our Smoothie 
      </h2>

      <div className="mb-8">
        {/* Grid layout for the smoothies */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Smoothie Item 1 */}
          <div className="bg-white rounded-md shadow-lg overflow-hidden transition-transform hover:scale-105">
            <img
              src="https://images.pexels.com/photos/8394976/pexels-photo-8394976.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Smoothie Item 1"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h4 className="text-2xl font-sans font-semibold text-gray-800">Mango Smoothie</h4>
            <p className="text-gray-600 text-xl font-sans mt-2">Creamy mango blended with yogurt and honey for a tropical treat.</p>
            <p className="mt-2 text-red-600 font-semibold">$5.99</p>
          </div>

          {/* Smoothie Item 2 */}
          <div className="bg-white rounded-md shadow-lg overflow-hidden transition-transform hover:scale-105">
            <img
              src="https://images.pexels.com/photos/4551975/pexels-photo-4551975.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Smoothie Item 2"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h4 className="text-2xl font-sans font-semibold text-gray-800">Strawberry Banana Smoothie</h4>
            <p className="text-gray-600 text-xl font-sans mt-2">A refreshing blend of ripe strawberries, bananas, and almond milk.</p>
            <p className="mt-2 text-red-600 font-semibold">$6.49</p>
          </div>

          {/* Smoothie Item 3 */}
          <div className="bg-white rounded-md shadow-lg overflow-hidden transition-transform hover:scale-105">
            <img
              src="https://images.pexels.com/photos/616833/pexels-photo-616833.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Smoothie Item 3"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h4 className="text-2xl font-sans font-semibold text-gray-800">Green Detox Smoothie</h4>
            <p className="text-gray-600 text-xl font-sans mt-2">A healthy blend of spinach, kale, cucumber, and apple juice.</p>
            <p className="mt-2 text-red-600 font-semibold">$7.29</p>
          </div>

          {/* Smoothie Item 4 */}
          <div className="bg-white  shadow-lg overflow-hidden transition-transform hover:scale-105">
            <img
              src="https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Smoothie Item 4"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h4 className="text-2xl font-sans font-semibold text-gray-800">Berry Blast Smoothie</h4>
            <p className="text-gray-600 text-xl font-sans mt-2">Mixed berries blended with almond milk and chia seeds for a superfood boost.</p>
            <p className="mt-2 text-red-600 font-semibold">$6.79</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  );
};

export default Menu;
