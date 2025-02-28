import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { useCart } from "../Context/CartContext";
import logo from "../assets/Logo.png";

const styles = {
  link: "text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70",
  mobileLink: "py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70",
};

const Navbar = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Ref for menu container

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-black border-b border-gray-700">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center" title="FoodWale">
              <img
                className="w-auto h-8 lg:h-10 rounded-md"
                src={logo}
                alt="FoodWale Logo"
                height={200}
                width={200}
              />
              <h1 className="text-white px-4 text-3xl">FoodWale</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className={styles.link} title="Home">
              HOME
            </Link>
            <Link to="/menu" className={styles.link} title="Menu">
              MENU
            </Link>
            <Link to="/orders" className={styles.link} title="Online Orders">
              ONLINE ORDERS
            </Link>
            <Link to="/about" className={styles.link} title="About">
              ABOUT
            </Link>
            <Link to="/contact" className={styles.link} title="Contact">
              CONTACT
            </Link>
          </div>

          {/* Icons: Cart & Login */}
          <div className="hidden md:flex items-center space-x-6 relative">
            <Link to="/cart" className="relative text-white hover:text-opacity-70 transition-all duration-200">
              <FiShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
            <Link to="/login" className="text-white hover:text-opacity-70 transition-all duration-200">
              <FaUser className="w-6 h-6" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex p-2 text-white transition-all duration-200 rounded-md lg:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav ref={menuRef} className="px-4 py-5 text-center bg-black md:hidden">
            <div className="flex flex-col items-center space-y-3">
              <Link to="/" className={styles.mobileLink} title="Home" onClick={() => setIsMenuOpen(false)}>
                HOME
              </Link>
              <Link to="/menu" className={styles.mobileLink} title="Menu" onClick={() => setIsMenuOpen(false)}>
                MENU
              </Link>
              <Link to="/orders" className={styles.mobileLink} title="Online Orders" onClick={() => setIsMenuOpen(false)}>
                ONLINE ORDERS
              </Link>
              <Link to="/about" className={styles.mobileLink} title="About" onClick={() => setIsMenuOpen(false)}>
                ABOUT
              </Link>
              <Link to="/contact" className={styles.mobileLink} title="Contact" onClick={() => setIsMenuOpen(false)}>
                CONTACT
              </Link>
              <Link to="/cart" className={`${styles.mobileLink} relative`} title="Cart" onClick={() => setIsMenuOpen(false)}>
                <FiShoppingCart className="inline-block w-5 h-5 mr-2" />
                CART
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                    {totalItems}
                  </span>
                )}
              </Link>
              <Link to="/login" className={styles.mobileLink} title="Login" onClick={() => setIsMenuOpen(false)}>
                <FaUser className="inline-block w-5 h-5 mr-2" /> LOGIN
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
