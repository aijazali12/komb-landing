import React, {useState} from 'react';
import './App.css';
import {Modal} from 'reactstrap';
import { Button } from "reactstrap";
import { ModalHeader, ModalBody, ModalFooter } from 'react-bootstrap';
// import SignUp from './components/SignUp';

const SignUp = () => {
  const [ showModal, setShowModal ] = useState(false);
  const toggle = () => setShowModal(!showModal);

  return (
    <>
      <Modal
        className="pop"
        size="lg"
        isOpen={showModal}
        toggle= {toggle}
        
        // toggle={() => setmodal(!modal)}
      >
        <ModalHeader toggle={toggle} charCode="close">Sign Up</ModalHeader>
        <ModalBody>
          <form>
            <div class="form-row">
              <div class="col in">
                <label for="firstName" class="sr-only">
                  Email
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                />
              </div>
              <div class="col in">
                <label for="lastName" class="sr-only">
                  Last Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div class="form-row">
              <div class="col in">
                <label for="staticEmail2" class="sr-only">
                  Email
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="abc@xyz.com"
                />
              </div>
              <div class="col in">
                <label for="mobileNumber" class="sr-only">
                  Mobile Number
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="+92 3xx xxxxxxx"
                />
              </div>
            </div>
            <div class="form-row">
              <div class="col in">
                <label for="Password" class="sr-only">
                  Email
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Password"
                />
              </div>
              <div class="col in">
                <label for="ConfirmPassword" class="sr-only">
                  Mobile Number
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={toggle}>
            Sign Up
          </Button>{" "}
          <Button color="danger" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <button
        type="button"
        className="sign mt-3"
        variant="dark"
        onClick={toggle}
      >
        Click Me!
      </button>
    </>
  );
};

function App() {

 
  return (
    <>
      
      <div className="App">
        <div className="App-header">
          <h1 className="heading">
            We are launching soon, <br /> something big is coming
          </h1>

          <div>
            <span>
              <img src="google-play.png" alt="play-store" />
            </span>
            <span>
              <img src="app-store.png" alt="app-store" />
            </span>
          </div>
          <SignUp />
        </div>
      </div>
    </>
  );
}

export default App;
