import React from 'react'
import { grouped } from '../assets'

const Metabnb = () => {
  return (
    <section className='flex py-16 bg-lightPurple'>
    <div className='flex mx-20'>
      <div className='flex flex-col w-[50%] py-8'>
        <h3 className='text-white text-[48px] leading-[59.95px] text-bold'>Metabnb NFTs</h3>
        <p className='text-white text-[18px] leading-[35px] mr-40 py-6'>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
        <a href="/" className='bg-white text-lightPurple py-4 px-10 max-w-[29%] rounded-lg'>Learn more</a>
      </div>
      <div className='flex flex-col w-[50%]'>
        <img src={grouped} alt="Metabnb nfts" />
      </div>
    </div>
    </section>
  )
}

export default Metabnb
