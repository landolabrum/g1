import { Container } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function UiModal({show, children, onClose}) {
  const [sh, setsh] = useState(false);
  useCallback(()=>{
    onClose()
  }, [show])
  useEffect(()=>{
    if(show){
      setsh(show)
    }
  },[show])
  const handleClose = () => {
    setsh(false);
    onClose()
  }
  const handlesh = () => setsh(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handlesh}>
        {show && show.toString()}
      </Button> */}

      <Modal fullscreen show={sh} onHide={handleClose} animation={false}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
        <Modal.Header>
          <Container>
        <Button variant="secondary" onClick={handleClose} className="w-100">
          Back
        </Button>
        </Container>
        </Modal.Header>
        <Modal.Body className='full-modal'>{children}</Modal.Body>
      </Modal>
    </>
  );
}
