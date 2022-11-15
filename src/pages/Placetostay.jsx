import styles from '../style.module.css';

import { placetostay } from '../constants';
import { rate } from '../assets';

const Placetostay = () => {
  return (
    <section className="mx-20">
      <div className="py-10">
        <h2 className="text-[48px] text-center leading-[59.95px] font-bold">
          Inspiration for your next adventure
        </h2>
      </div>
      <div
        className={`flex  ${styles.showcaseGrid} `}
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
