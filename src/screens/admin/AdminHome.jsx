import { Button, Layout } from "antd";
import React, { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import CustomHeader from "../../components/admin/Header";
import Dashboard from "../../components/admin/Dashboard";
import CreateMovie from "../../components/admin/CreateMovie";
import AllMovies from "../../components/admin/AllMovies";
import CreateTheater from "../../components/admin/CreateTheater";

const { Sider, Header, Content } = Layout;

const AdminHome = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("dashboard");
  return (
    <Layout>
      <Sider
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="sider"
      >
        <Sidebar setSelectedKey={setSelectedKey} />
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          className="trigger-btn"
        />
      </Sider>
      <Layout>
        <Header className="header">
          <CustomHeader />
        </Header>
        <Content className="content">
          {selectedKey === "dashboard" && <Dashboard />}
          {selectedKey === "create-movie" && <CreateMovie />}
          {selectedKey === "all-movies" && <AllMovies />}
          {selectedKey === "create-theater" && <CreateTheater />}
          {selectedKey === "all-theaters" && <Dashboard />}
          {selectedKey === "create-movie-schedule" && <Dashboard />}
          {selectedKey === "all-movie-schedules" && <Dashboard />}
          {selectedKey === "users" && <Dashboard />}
          {selectedKey === "bookings" && <Dashboard />}
          {selectedKey === "reviews" && <Dashboard />}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminHome;
