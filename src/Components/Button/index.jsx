import './style.css';
import Modal from '../TodoModal/modal';
import { useState } from 'react';

const Button = () => {
  const [openModal, setIsOpenModal] = useState(false);
  return (
    <div id='botão-Move1'>
    <button onClick={() => setIsOpenModal(true)}><h3>FAÇA SEU ORÇAMENTO</h3></button>
    <Modal isOpen={openModal} setModalOpen={() => setIsOpenModal(!openModal)}></Modal>
  </div>
  )
}

export default Button