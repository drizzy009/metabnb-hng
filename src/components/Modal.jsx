import React from 'react';
import Modal from 'react-modal';
import { close24, metamasklogo, right, walletconnectlogo } from '../assets';
import styles from '../style.module.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '42%',
    transform: 'translate(-50%, -50%)',
    padding: '25px',
    radius: '8px',
  },
};

Modal.setAppElement('#root');

function Modalbtn () {
 
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button
        className={`${styles.navbtnConnect} ${styles.tabNav}`}
        onClick={openModal}
      >
        Connect Wallet
      </button>
    
      
      <Modal 
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className=''>
          <div className={`flex justify-between sm:gap-[360px]`}>
            <h2 className='font-semibold tracking-wide font-inter'>
              Connect Wallet
            </h2>
            <img src={close24} className='cursor-pointer' alt="close" onClick={closeModal} />
          </div>
          <span className={`${styles.modalH4}`}></span>
          <h4 className={`pt-16 pb-3`}>Choose your preferred wallet:</h4>
          <div >
          <button className={`${styles.connectWallet} flex items-center`}><img src={metamasklogo} alt="metamask" /> Metamask <img src={right} alt={right} /></button>
          <br />
          <button className={`${styles.connectWallet} flex items-center text-black`}><img src={walletconnectlogo} alt="walletconnect" /> WalletConnect <img src={right} alt={right} /></button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Modalbtn;
