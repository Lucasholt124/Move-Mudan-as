import CardServicos from '../../Components/Button/Button/index';
import './style.css';
import calloutline from '../../assets/call-outline.svg';
import shield from '../../assets/shield-checkmark.svg';
import Vetor from '../../assets/Vector1.svg';

const NossosServicos = () => {
  return (
    <main id='nossos-servicos'>
      <div className='nossos-servicos1'>
        <p>Nossos Serviços</p>
        <div id='nossos-servicos-h1'>
          <h1 >Serviços personalizado</h1>
        </div>
      </div>
      <div id='cards-servicos'>
          <CardServicos img={calloutline} title="Atendemos 24hrs todos os dias" description="Reserva simples e online, economize tempo e aborrecimento sem </br> vistas domiciliares" />
          <CardServicos img={shield} title="Todos os seus dados seram protegidos" description="Reserva simples e online, economize tempo e aborrecimento sem vistas domiciliares" />
          <CardServicos  img={Vetor} title="O valor mais econômico para você" description="Reserva simples e online, economize tempo e aborrecimento sem vistas domiciliares" />
        </div>
    </main>
  )
}

export default NossosServicos
