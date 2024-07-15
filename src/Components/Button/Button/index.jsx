import'./style.css';
import calloutline from '../../../assets/call-outline.svg';

const CardServicos = (props) => {
  const {img, title, description } = props;
  return (
    <div className='card1'>
       <img src={img} alt="Imagem de um telefone" />
      <div className='card1-text'>
      <p>{title}</p>
      </div>
      <div className='card1-text-p2'>
      <p>{description}</p>
      </div>
    </div>
  )
}

export default CardServicos;