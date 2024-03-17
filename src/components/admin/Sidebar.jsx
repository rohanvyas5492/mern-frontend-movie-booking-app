import { Flex, Menu } from "antd";
import React from "react";
import { BiSolidMoviePlay, BiSolidCameraMovie, BiLogOut } from "react-icons/bi";
import { AiFillDashboard } from "react-icons/ai";
import { RiMovie2Line } from "react-icons/ri";
import { IoMdTime } from "react-icons/io";
import { FaUsers, FaBookmark } from "react-icons/fa";
import { MdReviews } from "react-icons/md";

const { SubMenu } = Menu;

const Sidebar = ({ setSelectedKey }) => {
  return (
    <>
      <Flex align="center" justify="center">
        <div className="logo">
          <BiSolidCameraMovie />
        </div>
      </Flex>
      <Menu
        mode="vertical"
        className="menu-bar"
        defaultSelectedKeys={["dashboard"]}
        onClick={(e) => setSelectedKey(e.key)}
      >
        <Menu.Item key="dashboard" icon={<AiFillDashboard />}>
          Dashboard
        </Menu.Item>
        <SubMenu key="sub1" icon={<BiSolidMoviePlay />} title="Movies">
          <Menu.Item key="create-movie">Create Movie</Menu.Item>
          <Menu.Item key="all-movies">All Movies</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<RiMovie2Line />} title="Theaters">
          <Menu.Item key="create-theater">Create Theater</Menu.Item>
          <Menu.Item key="all-theaters">All Theaters</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<IoMdTime />} title="Movie Schedules">
          <Menu.Item key="create-movie-schedule">
            Create Movie Schedule
          </Menu.Item>
          <Menu.Item key="all-movie-schedules">All Movies Schedules</Menu.Item>
        </SubMenu>
        <Menu.Item key="users" icon={<FaUsers />}>
          Users
        </Menu.Item>
        <Menu.Item key="bookings" icon={<FaBookmark />}>
          Bookings
        </Menu.Item>
        <Menu.Item key="reviews" icon={<MdReviews />}>
          Reviews
        </Menu.Item>
        <Menu.Item key="logout" icon={<BiLogOut />}>
          Logout
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Sidebar;
