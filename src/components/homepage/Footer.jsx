import { Layout } from "antd";

const { Footer } = Layout;

const MyFooter = () => {
  return (
    <>
      <Footer
        style={{ textAlign: "center", background: "#001529", color: "#fff" }}
      >
        <p>Bookingmate</p>
        <p>Copyright © 2024. All rights reserved.</p>
      </Footer>
    </>
  );
};

export default MyFooter;
