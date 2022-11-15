import { navLinks } from "./../constants/index";
import { useState } from "react";
import { menu, close, metabnblogo } from "../assets";
import styles from "../style.module.css"

const Navbar = () => {
  const [active, setActive] = useState ("Home");
  const [toggle, setToggle] = useState (false);

  return (
    <nav className="w-full flex py-6 justify-around items-center">
      <img src={metabnblogo} alt="metabnblogo" className="sm:justify-center sm:flex" />

      <ul className="list-none sm:flex hidden justify-center items-center">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-redrose font-normal cursor-pointer text-[20px] ${
              active === nav.title ? "text-black" : "text-black"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <button className={`${styles.navbtnConnect} sm:flex hidden `}>Connect wallet</button>




      <div className={`sm:hidden flex flex-1 justify-end items-center mx-10`}>
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0  my-2 min-w-[140px] rounded-xl mx-6  ${styles.menuMobile} ${styles.sidebar}`}
        >
          <ul className="list-none flex justify-center items-center flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-redrose font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <button className={`${styles.navbtnConnect} sm:hidden flex my-4`}>Connect wallet</button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
