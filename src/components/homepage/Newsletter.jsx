import React from "react";
import { Form, Input, Button, Row, Col, Typography } from "antd";

const onFinish = (values) => {
  console.log("Submitted:", values);
  // You can handle form submission here, such as sending data to your server
};

const Newsletter = () => {
  return (
    <>
      <Row justify="center" align="middle" style={{ padding: "50px" }}>
        <Col span={8}>
          <Typography.Title level={3} style={{ textAlign: "center" }}>
            Subscribe to our Newsletter for movie updates!
          </Typography.Title>
          <Form name="newsletter" onFinish={onFinish}>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
                {
                  type: "email",
                  message: "Please enter a valid email address!",
                },
              ]}
            >
              <Input size="large" placeholder="Enter your email" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" size="large" htmlType="submit" block>
                Subscribe
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Newsletter;
