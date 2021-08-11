import { ReactNode, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

interface modalProps {
  show: boolean;
  children: ReactNode;
}

const Modal = ({ show, children }: modalProps) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalLayout = show && (
    <div className='fixed z-50 inset-0 min-h-screen flex justify-center items-center bg-gray-600/50'>
      {children}
    </div>
  );

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalLayout,
      document.getElementById('modal-root')
    );
  } else {
    return null;
  }
};

export default Modal;
