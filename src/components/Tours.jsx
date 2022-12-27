import React from "react";

function Tours() {
  return (
    <div>
      <div class="grid grid-cols-1  gap-4">
        <div className="flex justify-center pb-12">
          <div className="w-64 mr-8 mt-20">
            <h1 className="font-bold uppercase text-2xl pb-4">Snowmobile Tours</h1>
            <p>
              A guided 2 hour adventure that traverses over 100 miles. The tour
              typically includes stops along the way to take in the beautiful
              views and learn about the local area. Snowmobile tours can be a
              thrilling and unique way to explore the winter landscape and are
              often a popular activity for tourists and locals alike.
            </p>
          </div>
          <div>
            <img
              src="../assets/snowmobile1.png"
              alt="snowmobile"
              className="image"
            />
          </div>
        </div>

        <div className="flex justify-evenly pb-12">
          <div>
            <img
              src="https://www.bvadventurehub.com/content/files/uploads/2017/06/Side-By-Side-Rentals.jpg"
              alt="side-by-side"
              className="image"
            />
          </div>
          <div className="w-64 mt-20">
            <h1 className="font-bold uppercase text-2xl pb-4">Side-By-Side Tours</h1>
            <p>
              Drive your own Side-x-Side! We offer a guided or self-guided 2
              hour tour that takes you across our private property showing you
              breathtaking views and giving you the ultimate off road
              experience. This is perfect for couples or small families where
              they can all enjoy being together!
            </p>
          </div>
        </div>
        <div className="flex justify-evenly align-middle">
          <div className="w-64 mt-20">
            <h1 className="font-bold uppercase text-2xl pb-4">ATV Tours</h1>
            <p>
              This 2-hour tour takes you through the mountains and even through
              creeks, providing an ultimate adventure for those seeking a
              thrill. It is the perfect activity for those looking to explore
              the outdoors in a unique and exciting way.
            </p>
          </div>
          <div>
            <img
              src="https://www.durangotrain.com/wp-content/images/ATV%20ARiver.jpg"
              alt="atv"
              className="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tours;
