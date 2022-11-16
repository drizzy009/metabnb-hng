import { footerLinks, socialMedia } from "../constants";
import styles from "../style";
import style from '../style.module.css';
import { metabnblogo2 } from "../assets";

const Footer = () => (
  <section className={`${styles.paddingY} flex-col bg-black`}>
    <div className={`${styles.flexStart} md:flex-row  sm:flex-col mb-8 sm:w-[90%] w-[100%] flex-col-reverse`}>
      <div className="sm:flex-[1] sm:flex sm:flex-col sm:justify-start sm:mr-10 m-[auto]">
      <div className={`${style.footerBorder} border-gray-600 border-t`}></div>
        <div className="pt-12 mx-5 sm:mx-20 sm:pt-0 ">
        <img
          src={metabnblogo2}
          alt="metabnb"
          className=" sm:flex items-start sm:m-0 m-[auto] sm:w-[80%] w-[60%]"
        />
        <div className="flex justify-center pt-8 pb-8 sm:justify-start sm:pb-12 sm:pt-20">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
        </div>
        <p className="font-redrose font-normal text-[18px] leading-[27px] text-white sm:text-left text-center">
        Ⓒ 2022 Metabnb
      </p>
        </div>
      </div>

      <div className="flex-[1.5] w-[94%] flex flex-row justify-between flex-wrap md:mt-0 mt-10 sm:mx-0 mx-5">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-redrose font-bold text-[18px] leading-[22.48px] text-white">
              {footerlink.title}
            </h4>
            <ul className="mt-4 list-none">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-redrose font-normal text-[14px] leading-[30px] text-white hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;