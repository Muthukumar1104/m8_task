import React from "react";
import { useContext } from "react";
import "./SuccessModal.css";
import { Modal, Button } from "react-bootstrap";
import Appcontext from "../Appcontext/Appcontext";

const Success_modal = (props) => {
  const { success, setSuccess } = useContext(Appcontext);
  const { message, back } = props;
  return (
    <>
      <Modal
        show={success}
        onHide={() => setSuccess(false)}
        className="p-5 success_modal"
      >
        <Modal.Body className="text-center success_modal_body">
          {message}
          <div>
            <Button
              variant="success"
              className="mt-3"
              onClick={() => setSuccess(false)}
            >
              OK
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Success_modal;
