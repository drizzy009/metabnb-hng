import styles from '../style.module.css';

import { nftpack } from '../constants';
import { rate } from '../assets';

const Showcase = ({ index }) => (
  
  <section className={`sm:mx-20 ${styles.showcaseMargin}`}>
    <div className='py-10'>
        <h2 className=' text-center sm:text-[48px] sm:leading-[59.95px] text-[40px] leading-[50px] font-bold'>Inspiration for your next adventure</h2>
    </div>
  <div
    className={`  ${styles.showcaseGrid} ${
      index !== nftpack.length - 1 ? 'mb-6' : 'mb-0'
    }`}
  >
    {nftpack.map((nftpacks, index) => (
      <div key={nftpacks.id} className={`${styles.showcaseBorder}`} >
        <div>
          <img src={nftpacks.nftimg} alt="NFTs' Packs" />
        </div>
        <div className='flex justify-between py-4'>
          <div className='flex flex-col items-start'>
            <p className='text-[12px]'>{nftpacks.title}</p>
            <p className='text-[12px]'>{nftpacks.distance}</p>
            <img src={rate} alt="ratings" className='pt-2' />
          </div>
          <div className='flex flex-col items-end'>
            <p className='text-[12px] font-bold'>{nftpacks.price}</p>
            <p className='text-[12px]'>{nftpacks.duration}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
  </section>
);

export default Showcase;
