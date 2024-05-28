import './style.css';
import imagemm0ve1 from '../../assets/Imagem-m0ve1.png';
import Button from '../../Components/Button';
import LetrasMove from '../../Components/LetrasMove';
import TextPrincipal from '../../Components/TextPrincipal';

const Header = () => {
  return (
  <div className='App1'>   
    <img id='imagem-Move1' src={imagemm0ve1} alt="Imagem principal" />
    <span id='caixa-letras'>
      <LetrasMove />
    </span>
    <span id='caixa-textprincipal'>
      < TextPrincipal />
    </span>
    <span id='caixa-button'>
     {<Button />}
    </span>
  </div>
  )
}

export default Header