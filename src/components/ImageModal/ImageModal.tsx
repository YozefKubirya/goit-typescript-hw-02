import Modal from 'react-modal'
import css from '../ImageModal/ImageModal.module.css'
import { ReactNode,FC } from 'react';
Modal.setAppElement('#root');

interface ImageModalProps {
  children: ReactNode;  
  onClose: () => void; 
}

export const  ImageModal: FC<ImageModalProps> =({children,onClose})=>{
   const handleKeyDown = (event:KeyboardEvent) :void=> {
      if (event.key === 'Escape') {
        onClose();
      }
    };
   return<>
   <Modal 
     isOpen={true}
     onRequestClose={onClose}
     onAfterOpen={() => window.addEventListener('keydown', handleKeyDown)}
     onAfterClose={() => window.removeEventListener('keydown', handleKeyDown)}
     className={css.modal}
     overlayClassName={css.overlay}> {children}  
      <button onClick={onClose} className={css.closeBtn}>X</button></Modal>
   </>
}
