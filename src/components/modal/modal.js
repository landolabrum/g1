import { Container } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function UiModal({show, children, onClose, title, fullscreen}) {
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

      <Modal  fullscreen={fullscreen} show={sh} onHide={handleClose} animation={false}>
        <Modal.Header closeButton onClick={handleClose} className='modal-title bg-lite'>
          <Modal.Title className='d-flex w-100'>
            {title}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body  className='full-modal'>{children}</Modal.Body>
        {/* <Modal.Footer className='bg-dark'>
          <Container>
        <Button variant="primary" onClick={handleClose} className="w-100 my-3">
          Back 
        </Button>
        </Container>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
