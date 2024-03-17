import { Form, Input, Button, Layout, Flex, Avatar } from "antd";
import Navbar from "../../components/homepage/Navbar";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

const SignupForm = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
  };

  return (
    <>
      <Navbar />
      <Layout>
        <Flex className="form-container">
          <div className="heading-section">
            <div className="default-avatar">
              <Avatar size={64} icon={<UserOutlined />} />
            </div>
            <span className="sub-head">new here</span>
            <h2 className="main-head">join now if you love movies</h2>
          </div>

          <Form
            name="signup"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="fullname"
              label="Full Name"
              rules={[
                { required: true, message: "Please enter your full name" },
              ]}
            >
              <Input placeholder="Full Name" />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input type="email" placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Please enter your password" },
                { min: 6, message: "Password must be at least 6 characters" },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              label="Confirm"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Please confirm your password" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The two passwords do not match")
                    );
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Confirm Password" />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Sign Up
              </Button>
            </Form.Item>
          </Form>
          <div className="login-options">
            Already have an account? <Link to="/login">Login Here</Link>
          </div>
        </Flex>
      </Layout>
    </>
  );
};

export default SignupForm;
