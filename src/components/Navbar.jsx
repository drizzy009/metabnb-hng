import { navLinks } from "./../constants/index";
import { useState } from "react";
import { menu, close, metabnblogo } from "../assets";
import styles from "../style.module.css"
import { Link } from "react-router-dom";
import Modalbtn from '../components/Modal';



const Navbar = () => {
  const [active, setActive] = useState ("Home");
  const [toggle, setToggle] = useState (false);
  

  return (
    <nav className="flex items-center justify-around py-6 mx-5 sm:w-full sm:mx-0 w-[90%]">
      <Link to='/'><img src={metabnblogo} alt="metabnblogo" className={`sm:justify-center sm:flex sm:w-[100%]  ${styles.tabNavlogo}`} /></Link>

      <ul className={`${styles.tabNav} items-center justify-center hidden list-none sm:flex`}>
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
     {/*<button className={`${styles.navbtnConnect} sm:flex hidden `}>Connect wallet</button>*/}
     <Modalbtn  />




      <div className={`sm:hidden flex md:hidden flex-1 justify-end items-center sm:mx-10 mx-0`}>
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
          <ul className={`flex flex-col items-center justify-center list-none ${styles.tabNav_mob}`}>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-redrose font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <Link to={nav.id}>{nav.title}</Link>
              </li>
            ))}
            
          </ul>
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
