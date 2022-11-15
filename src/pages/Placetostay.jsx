import styles from '../style.module.css';

import { placetostay, placetostayNav } from '../constants';
import { filter, rate } from '../assets';

const Placetostay = () => {
  return (
    <section className="mx-20">
      <ul className="flex items-center justify-around py-16">
        {placetostayNav.map((sub) => (
          <li key={sub.id} className='flex justify-between'>
            {sub.title}
          </li>
        ))}
        <button className={`${styles.filterBtn}`}><span className='px-4 py-3'>Location</span> <img src={filter} alt={filter} className='px-4'/></button>
      </ul>
      <div
        className={`flex  ${styles.showcaseGrid}  pb-14`}
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
