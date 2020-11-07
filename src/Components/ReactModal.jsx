import React, { useState, useEffect } from 'react';
import Modal from 'react-overlays/Modal';
import styled from 'styled-components';

const Backdrop = styled('div')`
  position: fixed;
  z-index: 1040;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  opacity: 0.5;
`;

// we use some pseudo random coords so nested modals
// don't sit right on top of each other.
const MyModal = styled(Modal)`
  position: fixed;
  width: 400px;
  z-index: 1040;
  top: 40%;
  left: 40%;
  border: 1px solid #e5e5e5;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  padding: 20px;
`;

function ReactModal({ isOpen, children, title }) {
  const [show, setShow] = useState(true);

  const renderBackdrop = (props) => <Backdrop {...props} />;

  useEffect(() => {
    setShow(isOpen);
  }, [isOpen]);

  return (
    <MyModal
      show={show}
      onHide={() => setShow(false)}
      renderBackdrop={renderBackdrop}
      aria-labelledby='modal-label'
    >
      <div className='text-center'>
        <h4 id='modal-label'>{title}</h4>
        {children}
      </div>
    </MyModal>
  );
}

export default ReactModal;
