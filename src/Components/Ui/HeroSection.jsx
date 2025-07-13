import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const HeroSection = () => {
  return (
    <>
      <main className="hero-section main">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <h1 className="heading-xl">
              Explore the World, One Country at a Time.
            </h1>
            <p className="paragraph">
              Discover the History, Culture and Beauty of every nation. Sort,
              Search and Filter through Countries to find the details you need.
            </p>
            <NavLink to='/about'>
              <button>
                Start Exploring <FaLongArrowAltRight />
              </button>
            </NavLink>
          </div>
          <div className="hero-image">
            <img
              src="/Image/world.png"
              alt="Image not Found"
              className="banner-image"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default HeroSection;
