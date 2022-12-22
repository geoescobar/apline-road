import React from "react";

function Hero() {
  return (
    <>
      <div className="block text-center bg-[#121420] text-white p-36">
        <h1>Alpine Road - Outdoor Destination</h1>
        <p>
          Experience the thrill of the great outdoors with our one of a kind
          tours
        </p>
        <button>Book Now</button>
      </div>

      <div className="block p-10 text-center bg-[#A1C6EA]">
        <h2>Create unforgetable memories</h2>
        <p>
          Regardless of the weather we have tours designed to give you the
          ultimate mountain experience! Witness spectacular views and experience
          the adrenaline of pushing our fleet to the limit!
        </p>
        <p>
          If you're coming in the winter we offer guided and unguided snowmobile
          tours.
        </p>
        <p>
          For summer trips we have UTV and ATV group tours offering you the best
          off road experience.
        </p>
      </div>

      <div className="block p-10 text-center">
        <h2>Reviews</h2>
        <p>Wow this is so amazing</p>
      </div>

      <div className="block bg-[#121420] text-white p-20">
        <h2>Our Guides</h2>
      </div>

      <div className="block text-center">
        <h2>Join our newsletter</h2>
        <p>Get updates on current weather conditions, promotions, and more!</p>
        <form>
          <label>Submit</label>
          <input></input>
        </form>
      </div>

      <div className="block text-center p-4">
        <h2>footer</h2>
      </div>
    </>
  );
}

export default Hero;
