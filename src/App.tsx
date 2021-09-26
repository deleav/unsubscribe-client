import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Modal from "./modules/modal/Modal";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <div id="main-content" className="App-header">
        <h1>Subscription info</h1>
        <table id="info" cellSpacing="24">
          <thead>
            <tr>
              <td>Service Name</td>
              <td>Expired Date</td>
              <td>Subscription Info Page</td>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <FloatingFooter>
        <PlusButton onClick={() => setOpenModal(true)} />
      </FloatingFooter>
      {openModal && (
        <Modal onClose={() => setOpenModal(false)}>
          <Link href="https://www.netflix.com/BillingActivity">Netflix</Link>
        </Modal>
      )}
    </div>
  );
}

export default App;

const FloatingFooter = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`;
const PlusButton = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: #b7bcba;
  margin: 0 50px 50px auto;
  width: 56px;
  height: 56px;
  cursor: pointer;

  &::before {
    position: absolute;
    content: "";
    width: 20px;
    height: 3px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
  }

  &::after {
    position: absolute;
    content: "";
    width: 20px;
    height: 3px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    background-color: white;
  }
`;
const Link = styled.a`
  padding: 16px;
  width: 100%;
  text-decoration: none;
  color: black;
  border-radius: 8px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
`;
