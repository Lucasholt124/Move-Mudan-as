
import ButtonSecundary from '../../Components/ButtonSecudary';
import CardsComoFunciona from '../../Components/CardsComoFunciona';
import line from '../../assets/Line.svg';

import './style.css';



const ComoFunciona = () => {
  return (
    <main id='como-funciona'>
      <section>
        <h1 className='h1-como-funciona'>Como Funciona?</h1>
        <h3>A move simplifica todo o processo de movimentação.</h3>
        <img id='line-img'  src={line} alt="Linhas dos cards" />   
        <div id='cards1'>
          <CardsComoFunciona />
        </div>
        <div id='cards2'>
          <CardsComoFunciona />
        </div>
        <div id='cards3'>
          <CardsComoFunciona />
        </div>
        <div id='cards4'>
          <CardsComoFunciona />
        </div>
        <div id='botao'>
           <ButtonSecundary />
        </div>
         
      </section>

    </main>
  )
}

export default ComoFunciona