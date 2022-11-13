import { Container } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
import { Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function UiModal({ show, children, onClose, title, fullscreen }) {
  const [sh, setsh] = useState(false);
  const [full, setFull] = useState(false);
  useCallback(() => {
    onClose()
  }, [show])
  useEffect(() => {
    if (show) {
      setsh(show)
    }
    if (fullscreen) {
      setFull(true)
    }
  }, [show, full])
  const handleClose = () => {
    setsh(false);
    if (onClose) {
      onClose()
    }
  }
  const handleFullscreen = () => {
    setFull(!full);
  }
  const handlesh = () => setsh(true);

  return (
    <>
      <Modal fullscreen={full} show={sh} onHide={handleClose} animation={false} >
        <div className='rounded-top border-bottom border-dark bg-white'>
          <div className='d-flex justify-content-between align-items-center my-1 mx-3'>
            <div >
              <h3>
                {title}
              </h3>
            </div>
            <div className='d-flex gap-3 my-2'>
              {!fullscreen && <Button variant="outline-secondary" onClick={handleFullscreen} >
                {full ? "Exit Fullscreen" : "Fullscreen"}
              </Button>}
              <Button variant="outline-secondary" onClick={handleClose}>
                Close
              </Button>
            </div>
          </div>

        </div>


        <Modal.Body className='d-flex justify-content-center'>
          {children}
        </Modal.Body>
      </Modal>
    </>
  );
}
