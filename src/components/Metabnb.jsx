import React from 'react'
import { grouped } from '../assets'
import styles from "../style.module.css"

const Metabnb = () => {
  return (
    <section className='block py-8 sm:py-16 sm:flex bg-lightPurple'>
    <div className={`block mx-5 sm:mx-20 sm:flex ${styles.metabnbBlock}`}>
      <div className={`sm:flex block sm:flex-col sm:w-[50%] py-8 ${styles.metabnbWidth}`}>
        <h3 className='text-white sm:text-[48px] sm:leading-[59.95px] text-[40px] leading-[50px] text-center sm:text-left text-bold'>Metabnb NFTs</h3>
        <p className='text-white text-[18px] leading-[35px] sm:mr-40 py-6'>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
        <a href="/" className='bg-white text-lightPurple py-4 px-10 max-w-[29%] rounded-lg'>Learn more</a>
      </div>
      <div className={`flex flex-col sm:w-[50%] sm:mt-0 my-8 ${styles.metabnbImg}`}>
        <img src={grouped} alt="Metabnb nfts" />
      </div>
    </div>
    </section>
  )
}

export default Metabnb
