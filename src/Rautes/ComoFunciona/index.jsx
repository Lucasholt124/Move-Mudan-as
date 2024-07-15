
import ButtonSecundary from '../../Components/ButtonSecudary';
import CardsComoFunciona from '../../Components/CardsComoFunciona';
import line from '../../assets/Line.svg';
import Casa from '../../assets/Casa.svg';
import Home from '../../assets/Home.svg';
import InTransit from '../../assets/InTransit.svg';
import Delivery from '../../assets/Delivery.svg';

import './style.css';

const ComoFunciona = () => {
  return (
    <main id='como-funciona'>
      <section>
        <h1 className='h1-como-funciona'>Como Funciona?</h1>
        <h3>A move simplifica todo o processo de movimentação.</h3>
        <img id='line-img'  src={line} alt="Linhas dos cards" />   
        <div id='cards1'>
        <CardsComoFunciona img={Casa} title="1. escolha seus detalhes de movimentação" description="Adcione os detalhes da sua mudança e obtenha o preço pela mudança imediatamente."  />
        </div>
        <div id='cards2'>
        <CardsComoFunciona img={InTransit} title="3. Dia de mudança. Sem pressa." description="No grande dia, nossos carregadores chegam e fazem todo o trabalho duro."/>
        </div>
        <div id='cards3'>
        <CardsComoFunciona img={Delivery} title="4.Pague somente após a mudança" description="Nossos funcionarios irão descarregar seus pertences em sua nova casa."/>
        </div>
        <div id='cards4'>
        <CardsComoFunciona img={Home} title="2. Organize tudo em um só lugar" description="vamos ajudá-lo a criar uma lista de coisas para mover, vamos dominar isso juntos."/>
        </div>
        <div id='botao'>
           <ButtonSecundary />
        </div>
         
      </section>

    </main>
  )
}

export default ComoFunciona