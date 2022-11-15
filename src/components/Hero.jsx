import { house, housechimney, tent, castle } from '../assets';
import styles from '../style.module.css';
import style from '../style';

const Hero = () => {
  return (
    <section className="mx-5 my-5 sm:my-20 sm:mx-20 sm:flex">
      <div className='sm:w-full sm:justify-between sm:flex'>
        <div className='flex-1 py-6'>
          <h1 className="font-normal text-[50px] leading-[64.4px]">
            Rent a <span className={`text-lightPurple font-bold `}>Place</span> away from{' '}
            <span className="font-bold text-lightPurple">Home</span> in the{' '}
            <span className="font-bold text-lightPurple">Metaverse</span>
          </h1>
          <p className={`${style.paragraph} w-[85%] py-10`}>
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
          <div className='pt-16'>
            <img src={house} alt={`nft house`} className="m-2" />
            <img src={housechimney} alt={`nft house`} className="m-2" />
          </div>
          <div>
            <img src={tent} alt={`nft tent`} className="mb-2 mr-2" />
            <img src={castle} alt={`nft castle`} className="mr-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
