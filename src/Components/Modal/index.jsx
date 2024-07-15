
import './style.css';

export default function Modal({ isOpen, setModalOpen , children })  {
  if (isOpen) {
  return (
      <div className='modal1' onClick={e => {
        if (e.target.className === "modal1")
          setModalOpen("Modal was closed");
      }}>
        <div className='modal-content1'>
          <div className='botao-voltar' onClick={setModalOpen}>Voltar</div>
          <div>{children}</div>
        </div>
      </div>
  )
}

return null
}