import'./style.css';
import calloutline from '../../../assets/call-outline.svg';

const CardServicos = () => {
  return (
    <div className='card1'>
      <img src={calloutline} alt="Imagem de um telefone" />  
      <div className='card1-text'>
        <p>Atendimento
          personalizado
        </p>
    </div> 
      <div className='card1-text-p2'>
        <p>reserva simples e online, economize tempo e aborrecimento sem vistas domiciliares</p>
      </div>
    </div>
  )
}

export default CardServicos