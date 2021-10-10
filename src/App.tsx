import { useState } from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { Modal } from "antd";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Main>
      <div id="main-content">
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
      <Modal
        visible={openModal}
        footer={null}
        onCancel={() => setOpenModal(false)}
      >
        <Link href="https://www.netflix.com/BillingActivity">Netflix</Link>
      </Modal>
    </Main>
  );
}

export default App;

const Main = styled.div`
  padding: 40px;
`;
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
  display: block;
  padding: 16px;
  width: 80%;
  text-decoration: none;
  color: black;

  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
`;
