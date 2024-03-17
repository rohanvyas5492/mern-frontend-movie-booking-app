import React, { useState } from "react";
import { Button, Form, Input, Typography } from "antd";
import { useCreateTheater } from "../../hooks/mutation/theater";

const buttonItemLayout = {
  wrapperCol: {
    span: 18,
    offset: 2,
  },
};

const { Title } = Typography;

const CreateTheater = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [contactInfo, setContactInfo] = useState("");

  const { mutateAsync: createTheaterAsync } = useCreateTheater();

  const handleSubmit = async () => {
    console.log();
    await createTheaterAsync({ name, location, address, contactInfo });
  };
  return (
    <>
      <Title level={2}>Create Theater</Title>
      <div className="main-content">
        <Form
          labelCol={{
            span: 2,
          }}
          wrapperCol={{
            span: 18,
          }}
        >
          <Form.Item
            label="Name"
            name="theater_name"
            rules={[
              {
                required: true,
                message: "Please enter Movie Theater!",
              },
            ]}
          >
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Location"
            name="location"
            rules={[
              {
                required: true,
                message: "Please enter Movie Location!",
              },
            ]}
          >
            <Input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
            rules={[
              {
                required: true,
                message: "Please enter Movie Address!",
              },
            ]}
          >
            <Input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Contact Info"
            name="movie_name"
            rules={[
              {
                required: true,
                message: "Please enter Movie Name!",
              },
            ]}
          >
            <Input
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
            />
          </Form.Item>

          <Form.Item {...buttonItemLayout}>
            <Button type="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default CreateTheater;
