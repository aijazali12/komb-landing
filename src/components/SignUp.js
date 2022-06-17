import React, { useState } from "react";
import {Modal, ModalHeader} from 'reactstrap'

const SignUp = () => {
     const {modal, setmodal} = useState(false)

  return (
    <>
      <Modal size="lg" isOpen="modal" toggle={() => setmodal(!modal)}>
        <ModalHeader></ModalHeader>
      </Modal>
      <button type="button" className="sign mt-3" variant="dark" onClick={() => setmodal(true)}>
        Click Me!
      </button>
    </>
  );
};

export default SignUp;
