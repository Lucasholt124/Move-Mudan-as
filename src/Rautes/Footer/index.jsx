import './style.css';
import Rectangle from '../../assets/Rectangle24.png';
import Elipse from '../../assets/Ellipse3.png';
import Polygon from '../../assets/Polygon1.png';
import Vector from '../../assets/Vector.svg';
const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <div className='footer-video'>
          <img src={Rectangle} alt="imagem do video" />
          <img id='elipse' src={Elipse} alt="Elipse do video" />
          <img id='Polygon' src={Polygon} alt="" />
        </div>
        <div className='footer-text-h1'>
          <h1>Faça sua mudança com segurança e <br /> sem dor de cabeça.</h1>
        </div>
        <div id='footer-text10'>
          <h3 id='footer-text-h3'>Em apenas um clique você pode receber imediatamente um orçamento com preço fixo personalizado de acordo com suas  nescessidades.</h3>
          <h3 id='footer-text-h4'>Fazemos um esforço extra para garantir que você possa relaxar completamente no dia da mudança. já são mais de 8.000 apenas no ano passado</h3>
        </div>
        <div id='footer-text'>
          <h1>Seu texto aqui
            <img id='Vector' src={Vector} alt="" />
          </h1>
          </div>
      </div>
      <div className="map">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317716.60643946525!2d-0.43124275861149985!3d51.528607014955114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1684065552223!5m2!1sen!2sus"  width="1580" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
		</div>

    </footer>
  )
}

export default Footer