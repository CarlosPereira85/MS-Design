import ReactDOM from "react-dom";

const Modal = ({ show, onClose, children }) => {
      if (!show) return null;
    
      return ReactDOM.createPortal(
        // First argument
        <>
          <div className='overlay' onClick={onClose}></div>
          <div className='modal'>
            <div className='modal-children'>
              <button className='close-button' onClick={onClose}>
                Close
              </button>
              {children}
            </div>
          </div>
        </>,
        //second argument
        document.querySelector('#modal')
      );
    };
    
    export default Modal;