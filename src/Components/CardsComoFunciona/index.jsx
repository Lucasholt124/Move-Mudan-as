import './style.css';
import Casa from '../../assets/Casa.svg';

const CardsComoFunciona = (props) => {
  const { img, title, description } = props;
  return (
  <div className='cards-como-funciona'>
    <div className='casa1'>
    <img src={img} alt="Imagem de uma casainha1" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </div>
  )
}

export default CardsComoFunciona