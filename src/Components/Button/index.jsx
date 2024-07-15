import Modal from '../Modal';
import { useState } from 'react';
import Ellipse from '../../assets/Ellipse 1.png';
import Rectangle from '../../assets/Rectangle 27.svg';
import Rectangle2 from '../../assets/Rectangle 28.svg';
import Ellipse2 from '../../assets/Ellipse 2.png';
import Ellipse3 from '../../assets/Ellipse 3.png';
import Ellipse4 from '../../assets/Ellipse 4.png';


import './style.css';

const Button = () => {
  const [openModal, setIsOpenModal] = useState(false);
  return (
    <>
    <div id='botão-Move1' >
      <button onClick={() => setIsOpenModal(true)}><h3>FAÇA SEU ORÇAMENTO</h3></button>
    </div>
    <Modal isOpen={openModal} setModalOpen={() => setIsOpenModal(!openModal)}>
    <div className='comecar'><h1 className='h1-comecar'>Vamos Começar?</h1></div>
    <div className='div-suas-informacoes'>
      <img src={Ellipse} alt="Elipse primeira imagem" className='elipse' />
      <h3 className='h3-suas-informações'>Suas informações</h3>
      <img src={Rectangle} alt="Traço preto ao lado do texto" className='Rectangle' />
      <img src={Ellipse2} alt="Elipse segunda imagem" className='elipse-secundario' />
      <h3 className='h3-item-numero'>2</h3>
      <h3 className='h3-item-mudança'>Item de Mudança</h3>
      <img src={Rectangle2} alt="O Traço preto2" className='Rectangle-secundario'/>
      <img src={Ellipse3} alt="Elipse terceira imagem" className='elipse-terciario'/>
      <h3 className='h3-localizacao'>Sua localização</h3>
      <img src={Rectangle2} alt="O Traço preto3" className='Rectangle-terciario' />
      <img src={Ellipse4} alt="Elipse quarta imagem"  className='elipse-quartario'/>
      <h3 className='h3-entrega'>Localização de entrega</h3>
      <img src={Rectangle2} alt="O Traço preto4" className='Rectangle-quartario' />
    </div>
      <div className='form'>
        <form action="">
          <h1 className='h1-nome'>Nome</h1>
          <label htmlFor="Nome">
            <input type="text" placeholder="Nome" required className='input-nome' /></label>
          <h1 className='h1-sobrenome'>Sobrenome</h1>
          <label htmlFor="Sobrenome">
            <input type="text" placeholder="Sobrenome" required className='input-sobrenome' /></label>
          <h1 className='h1-email'>E-mail</h1>
          <label htmlFor="E-mail">
            <input type="E-mail" placeholder="E-mail" required className='input-email' /></label>
          <h1 className='h1-telefone'>Telefone</h1>
          <label htmlFor="Telefone">
            <input type="text" placeholder="Telefone" required className='input-telefone' /></label>
        </form>
      </div>
      <div className='enviar'><button type="submit" className='botao-enviar'>Próximo</button></div>
    </Modal>
    </>
  )
}

export default Button