import React from "react";
import { Link } from "react-router-dom";

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
          <Link to="/">
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link to="/">
            <p>Tours</p>
          </Link>{" "}
        </li>
        <li>
          <Link to="/">
            <p>Contact</p>
          </Link>{" "}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
