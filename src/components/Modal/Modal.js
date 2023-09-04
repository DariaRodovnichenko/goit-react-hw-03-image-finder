import Modal from 'react-modal';

Modal.setAppElement('#root');

export const CustomModal = ({ isOpen, closeModal, contentLabel, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel={contentLabel}
    >
      {children}
      <button onClick={closeModal}>Close Modal</button>
    </Modal>
  );
};
