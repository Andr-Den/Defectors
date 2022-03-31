import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import AddForm from '../Form/Form'

function AddPage({setPageOpen}) {
  const dispatch = useDispatch();

  return (
    <Modal.Dialog>
      <Modal.Header >
        <Modal.Title>Добавление компании</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddForm />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => dispatch(setPageOpen(false))}>Close</Button>
      </Modal.Footer>
      </Modal.Dialog>
  )
}

export default AddPage;