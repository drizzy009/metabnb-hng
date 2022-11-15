import { house, housechimney, tent, castle } from '../assets';
import styles from '../style.module.css';
import style from '../style';

const Hero = () => {
  return (
    <section className="mx-5 my-5 sm:my-20 sm:mx-20 sm:flex">
      <div className='sm:w-full sm:justify-between sm:flex'>
        <div className='flex-1 py-6'>
          <h1 className="font-normal sm:text-[50px] sm:leading-[64.4px] text-[40px] leading-[44px] ">
            Rent a <span className={`text-lightPurple font-bold `}>Place</span> away from{' '}
            <span className="font-bold text-lightPurple">Home</span> in the{' '}
            <span className="font-bold text-lightPurple">Metaverse</span>
          </h1>
          <p className={`${style.paragraph} sm:w-[85%] sm:py-10 py-4`}>
            We provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone.
          </p>
          <div className='flex'>
            <input type="search" name="search" placeholder='Search for location' id="" className={`${styles.searchInput}`}/>
            <input type="submit" value="Search" className={`${styles.searchLabel}`} />
          </div>
        </div>
        <div className='flex'>
          <div className='pt-0 mr-2 sm:pt-16 sm:flex sm:flex-col'>
            <img src={house} alt={`nft house`} className="mb-2 sm:m-2 sm:mx-2" />
            <img src={housechimney} alt={`nft house`} className="sm:mb-2 sm:mx-2" />
          </div>
          <div className='flex-col'>
            <img src={tent} alt={`nft tent`} className="mb-2 sm:mr-2 sm:mb-2" />
            <img src={castle} alt={`nft castle`} className="sm:mr-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;