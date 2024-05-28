import CardServicos from '../../Components/Button/Button/index';
import './style.css';

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
          <CardServicos/>
          <CardServicos/>
          <CardServicos/>
        </div>
    </main>
  )
}

export default NossosServicos
