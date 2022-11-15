import { navLinks } from "./../constants/index";
import { useState } from "react";
import { menu, close, metabnblogo } from "../assets";
import styles from "../style.module.css"
import { Link } from "react-router-dom";




const Navbar = () => {
  const [active, setActive] = useState ("Home");
  const [toggle, setToggle] = useState (false);

  return (
    <nav className="flex items-center justify-around w-full py-6">
      <img src={metabnblogo} alt="metabnblogo" className="sm:justify-center sm:flex" />

      <ul className="items-center justify-center hidden list-none sm:flex">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-redrose font-normal cursor-pointer text-[20px] ${
              active === nav.title ? "text-black" : "text-black"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
           
            <Link to={nav.id}>{nav.title}</Link>
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
          <ul className="flex flex-col items-center justify-center list-none">
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
