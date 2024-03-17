import { Link } from "react-router-dom";
import { Avatar, Col, Flex, Layout, Row } from "antd";
import Logo from "../../assets/images/logo.png";
import Search from "antd/es/input/Search";
import { UserOutlined } from "@ant-design/icons";

const { Header } = Layout;

const Navbar = () => {
  return (
    <>
      <Layout>
        <Header style={{ paddingTop: 0, background: "#fff" }}>
          <Row justify="center">
            <Col span={18}>
              <Flex align="center" justify="space-between">
                <div className="movie-logo">
                  <img src={Logo} alt="logo" width="50px" height="50px" />
                  <Link to="/" className="navbar-brand" href="">
                    BOOKING MATE
                  </Link>
                </div>
                <Flex align="center" gap="3rem">
                  <Search placeholder="Search Movies..." allowClear />
                  <Flex align="center" gap="20px">
                    <Link className="nav-link" to="/login">
                      Login/Register
                    </Link>
                    <Avatar icon={<UserOutlined />} />
                  </Flex>
                </Flex>
              </Flex>
            </Col>
          </Row>
        </Header>
      </Layout>
    </>
  );
};

export default Navbar;
