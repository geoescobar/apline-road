import React from "react";

function Navbar() {
  const nav = document.querySelector(".navbar");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      nav.classList.add("nav--hidden");
    } else {
      nav.classList.remove("nav--hidden");
    }

    lastScrollY = window.scrollY;
  });

  return (
    <div>
      <ul className="navbar p-4 bg-[#121420] text-white flex justify-evenly">
        <li>
          <p>Home</p>
        </li>
        <li>
          <p>Tours</p>
        </li>
        <li>
          <p>Contact</p>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
