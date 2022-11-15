import { footerLinks, socialMedia } from "../constants";
import styles from "../style";
import { metabnblogo2 } from "../assets";

const Footer = () => (
  <section className={`${styles.paddingY} flex-col bg-black`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-[90%]`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <div className="mx-20">
        <img
          src={metabnblogo2}
          alt="metabnb"
        />
        <div className="flex pt-20 pb-12">
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
        <p className="font-redrose font-normal text-left text-[18px] leading-[27px] text-white">
        Ⓒ 2022 Metabnb
      </p>
        </div>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-redrose font-bold text-[18px] leading-[22.48px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
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