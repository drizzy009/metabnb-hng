import styles from '../style.module.css';

import { placetostay, placetostayNav } from '../constants';
import { filter, rate } from '../assets';

const Placetostay = ( index ) => {
  return (
    <section className={`sm:mx-20 ${styles.showcaseMargin}`}>
      <ul className={`${styles.placetostayHeader} flex items-center justify-around py-16`}>
        {placetostayNav.map((sub) => (
          <li key={sub.id} className='flex justify-between'>
            {sub.title}
          </li>
        ))}
        <button className={`${styles.filterBtn} flex items-center `}><span className='px-0 py-3 sm:px-4'>Location</span> <img src={filter} alt={filter} className='px-0 sm:px-4'/></button>
      </ul>
      <div
        className={`sm:flex block ${styles.showcaseGrid} ${
      index !== placetostay.length - 1 ? 'mb-6' : 'mb-0'
    } pb-14`}
      >
        {placetostay.map((nftpacks) => (
          <div key={nftpacks.id} className={`${styles.showcaseBorder}`}>
            <div>
              <img src={nftpacks.nftimg} alt="NFTs' Packs" />
            </div>
            <div className="flex justify-between py-4">
              <div className="flex flex-col items-start">
                <p className="text-[12px]">{nftpacks.title}</p>
                <p className="text-[12px]">{nftpacks.distance}</p>
                <img src={rate} alt="ratings" className="pt-2" />
              </div>
              <div className="flex flex-col items-end">
                <p className="text-[12px] font-bold">{nftpacks.price}</p>
                <p className="text-[12px]">{nftpacks.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Placetostay;
