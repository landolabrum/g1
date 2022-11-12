import { Container } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
import { Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function UiModal({ show, children, onClose }) {
  const [sh, setsh] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  useCallback(() => {
    onClose()
  }, [show])
  useEffect(() => {
    if (show) {
      setsh(show)
    }
  }, [show, fullscreen])
  const handleClose = () => {
    setsh(false);
    if(onClose){
      onClose()
    }
  }
  const handleFullscreen = () => {
    setFullscreen(!fullscreen);
  }
  const handlesh = () => setsh(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handlesh}>
        {show && show.toString()}
      </Button> */}

      <Modal fullscreen={fullscreen} show={sh} onHide={handleClose} animation={false}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
        <div className='d-flex justify-content-end border-bottom'>
          {/* <Container > */}
              <Button variant="flat" onClick={handleFullscreen} >
                {fullscreen?"Exit Fullscreen":"Fullscreen"}
              </Button>
              <Button variant="flat" onClick={handleClose} >
                Close
              </Button>
          {/* </Container> */}
        </div>
        <Modal.Body className='full-modal'>{children}</Modal.Body>
      </Modal>
    </>
  );
}
