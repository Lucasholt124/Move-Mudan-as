
import './style.css';


export default function Modal({ isOpen, setModalOpen , Children })  {
  if(isOpen) {
  return (
    <>
      <div className='modal1'>    
      <div className='modal-content1'>
         <h1 className='h1-comecar'>Vamos Começar?</h1>
         
      
        <button className='botao-voltar' onClick={setModalOpen}><h1 className='h1-voltar'>voltar</h1></button> 
      </div>
      </div> 
    </>
  ) 
}

return null


}