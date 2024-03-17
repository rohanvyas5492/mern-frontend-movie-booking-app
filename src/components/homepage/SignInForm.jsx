import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useSignInUser } from "../../hooks/mutation/user";
import { Button, Checkbox, Flex, Form, Input, Layout, Avatar } from "antd";
import Navbar from "../../components/homepage/Navbar";
import { UserOutlined } from "@ant-design/icons";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutateAsync: signInUserAsync } = useSignInUser();

  const onFinish = useCallback(
    async (values) => {
      const response = await signInUserAsync(values);
      console.log(response.data.data.token);
    },
    [signInUserAsync]
  );

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
            <span className="sub-head">hello</span>
            <h2 className="main-head">welcome back</h2>
          </div>
          <Form
            name="basic"
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
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
          <div className="login-options">
            Don't have an account? <Link to="/register">Register now</Link>
          </div>
        </Flex>
      </Layout>
    </>
  );
}

export default SignInForm;
