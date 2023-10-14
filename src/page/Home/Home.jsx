import React, { useState } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  ProjectOutlined,
  UnorderedListOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Outlet, useNavigate } from "react-router-dom";

const Home = () => {
  const [pageNavi, setPageNavi] = useState("board-project");
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const items = [
    getItem("Option 1", "1", <PieChartOutlined />),
    getItem("Option 2", "2", <DesktopOutlined />),
    getItem("User", "sub1", <UserOutlined />, [
      getItem("Tom", "3"),
      getItem("Bill", "4"),
      getItem("Alex", "5"),
    ]),
    getItem("Manage", "sub2", <UnorderedListOutlined />, [
      getItem("Board Project", "board-project", <ProjectOutlined />),
      getItem("Create Project", "create-project", <PlusCircleOutlined />),
    ]),
    getItem("Files", "9", <FileOutlined />),
  ];

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          // navigate
          onSelect={({ item, key, keyPath, selectedKeys, domEvent }) => {
            // console.log(key);
            // console.log(item);
            // console.log(keyPath);
            // console.log(selectedKeys);
            // console.log(domEvent);
            setPageNavi(key);
            navigate(`/manage-project/${key}`);
          }}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Manage</Breadcrumb.Item>
            <Breadcrumb.Item>
              {pageNavi === "board-project"
                ? "Board"
                : pageNavi === "create-project"
                ? "Create"
                : ""}
            </Breadcrumb.Item>
          </Breadcrumb>
          {/* This is place which help navigation */}
          <Outlet />
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
