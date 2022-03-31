import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import EditForm from '../EditForm/EditForm'

function EditPage({setEditPageOpen, company}) {
  const dispatch = useDispatch();

  return (
    <div className="position-fixed d-flex w-100 h-100">
      <Modal.Dialog className="position-relative">
        <Modal.Header >
          <Modal.Title>Добавление компании</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm company={company}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => dispatch(setEditPageOpen(false))}>Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
      </div>
  )
}

export default EditPage;
