import { useState } from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { Modal, Table } from "antd";
import { ListItem } from "./modules/List/types";
import { ColumnsType } from "antd/lib/table";
import HyperLink from "./modules/common/HyperLink";

interface TargetSite {
  name: string;
  url: string;
}

const columns: ColumnsType<ListItem> = [
  {
    title: "Service Name",
    dataIndex: "name",
  },
  {
    title: "Expired Date",
    dataIndex: "rechargeDate",
  },
  {
    title: "Subscription Info Page",
    dataIndex: "link",
    render(value) {
      return <HyperLink href={value}>Go to page</HyperLink>;
    },
  },
];

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [dataSource, setDataSource] = useState<ListItem[]>([]);
  const [targetSites, setTargetSites] = useState<TargetSite[]>([]);

  document.addEventListener(
    "filldatafromextension",
    function (
      e: Event & {
        readonly detail?: { data?: ListItem[]; targetSites?: TargetSite[] };
      }
    ) {
      console.log(e.detail);

      if (e.detail) {
        const detail = e.detail;
        if (detail.data?.length) setDataSource(detail.data);
        if (detail.targetSites?.length) setTargetSites(detail.targetSites);
      }
    }
  );

  return (
    <Main>
      <div id="main-content">
        <h1>Subscription info</h1>
        <Table dataSource={dataSource} columns={columns} />
      </div>
      <FloatingFooter>
        <PlusButton onClick={() => setOpenModal(true)} />
      </FloatingFooter>
      <Modal
        visible={openModal}
        footer={null}
        onCancel={() => setOpenModal(false)}
      >
        {targetSites.map((site) => (
          <HyperLink href={site.url}>
            <Option>{site.name}</Option>
          </HyperLink>
        ))}
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
const Option = styled.div`
  display: block;
  padding: 16px;
  width: 80%;
  text-decoration: none;
  color: black;

  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
`;
