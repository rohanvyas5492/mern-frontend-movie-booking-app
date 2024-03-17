import { Avatar, Flex, Typography, Dropdown } from "antd";
import Search from "antd/es/input/Search";
import React from "react";
import { IoNotificationsSharp } from "react-icons/io5";
import { UserOutlined } from "@ant-design/icons";

const items = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        6 new bookings today
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        10 new users signed up today.
      </a>
    ),
  },
];

const Header = () => {
  return (
    <Flex align="center" justify="space-between">
      <Typography.Title level={3} type="secondary">
        Welcome Back, Rohan
      </Typography.Title>
      <Flex align="center" gap="3rem">
        <Search placeholder="Search..." allowClear />
        <Flex align="center" gap="20px">
          <Dropdown menu={{ items }} placement="bottomRight">
            <a onClick={(e) => e.preventDefault()} href="#">
              <IoNotificationsSharp className="header-icon" />
            </a>
          </Dropdown>
          <Avatar icon={<UserOutlined />} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
