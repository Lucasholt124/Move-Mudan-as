import './style.css';
import Casa from '../../assets/Casa.svg';

const CardsComoFunciona = () => {
  return (
  <div className='cards-como-funciona'>
    <div className='casa1'>
      <img src={Casa} alt="Imagem de uma casainha1" />
      <h2>1. escolha seus detalhes de <br /> movimentação</h2>
      <p>Adcione os detalhes da sua mudança e obtenha o preço pela mudança imediatamente.</p>
    </div>
  </div>
  )
}

export default CardsComoFunciona