import { PropsWithChildren } from "react";
import styled from "styled-components";

export default function Modal({
  children,
  onClose,
}: PropsWithChildren<{
  onClose?(): void;
}>) {
  return (
    <Overlay onClick={onClose}>
      <Main>{children}</Main>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.35);
`;
const Main = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  background-color: white;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 20px 40px;
  border-radius: 12px;
`;
