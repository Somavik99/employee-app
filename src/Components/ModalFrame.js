import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

const ModalFrame = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        style={{
          color: " black",
          marginLeft: "2em",
          boxSizing: "border-box",
          outline: "none",
          border: "2px solid green",
          borderRadius: "100%",
          background: "white",
          width: "3em",
          height: "3em",
        }}
        variant="primary"
        onClick={handleShow}
      >
        <FontAwesomeIcon icon={faAdd} />
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ margin: "3px", padding: "2px" }}>
          <div style={{ margin: "2px" }}>
            <label> Emp Name: </label>
            <input
              type="text"
              style={{
                boxSizing: "border-box",
                outline: "none",
                borderBottom: "2px solid green",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
              }}
            />
          </div>
          <div style={{ margin: "2px" }}>
            <label> Emp Email: </label>
            <input
              type="email"
              style={{
                boxSizing: "border-box",
                outline: "none",
                borderBottom: "2px solid green",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
              }}
            />
          </div>
          <div style={{ margin: "2px" }}>
            <label>Emp Phone: </label>
            <input
              type="number"
              style={{
                boxSizing: "border-box",
                outline: "none",
                borderBottom: "2px solid green",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
              }}
            />
          </div>
          <div style={{ margin: "2px" }}>
            <label>Date Of Joining: </label>
            <input
              type="date"
              style={{
                boxSizing: "border-box",
                outline: "none",
                borderBottom: "2px solid green",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
              }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" >Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalFrame;
