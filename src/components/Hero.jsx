import React from "react";
import Reviews from "./Reviews";
import Tours from "./Tours";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="hero block text-center bg-[#121420] text-white p-44">
        <h1 className="font-bold uppercase md:whitespace-nowrap whitespace-normal text-7xl">
          Alpine Road Outdoor Adventures
        </h1>
        <p className="font-thin">
          Experience the thrill of the great outdoors with our one of a kind
          tours
        </p>
        <Link to="book-tour">
          <button className="border-2 border-[#121420] bg-[#121420] p-3 uppercase font-thin ">
            Book Now
          </button>
        </Link>
      </div>

      <div className="block p-10 text-center bg-[#BBD1EA]">
        <h2 className="font-bold pb-4 text-4xl underline uppercase">
          Create unforgetable memories
        </h2>
        <p className="font-thin pb-4">
          Regardless of the weather we have tours designed to give you the
          ultimate mountain experience! Witness spectacular views and experience
          the adrenaline of pushing our fleet to the limit!
        </p>
        <p className="font-thin pb-4">
          If you're coming in the winter we offer guided and unguided snowmobile
          tours.
        </p>
        <p className="font-thin">
          For summer trips we have UTV and ATV group tours offering you the best
          off road experience.
        </p>
      </div>

      <div className="block p-10 text-center">
        <h2 className="font-bold uppercase underline text-4xl">Reviews</h2>
        <Reviews />
      </div>

      <div className="block bg-[#121420] text-white p-20">
        <h2 className="font-bold text-4xl uppercase underline">Explore</h2>
        <Tours />
      </div>

      <div className="block p-12 text-center">
        <h2 className="font-bold pb-2 uppercase  text-4xl">
          Join our newsletter
        </h2>
        <p className="font-thin pb-2">
          Get updates on current weather conditions, promotions, and more!
        </p>
        <form>
          <input
            className="border-2 p-3.5 w-1/4 mr-2 border-[#121420] uppercase"
            placeholder="Enter your email address"
          ></input>
          <button className="text-white bg-[#121420] p-4">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Hero;
