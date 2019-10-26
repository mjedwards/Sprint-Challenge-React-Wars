import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import People from "./People";

const PeopleModal = props => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className='people'>
      <Button color='primary' onClick={toggle}>
        Read More About Me
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>
          <h2>{props.name}</h2>
        </ModalHeader>
        <ModalBody>
          <p>{props.hair}</p>
          <br></br>
          <p>{props.mass}</p>
          <br></br>
          <p>{props.height}</p>
          <br></br>
          <p>{props.eyes}</p>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default PeopleModal;
