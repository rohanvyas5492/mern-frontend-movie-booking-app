import React, { useState } from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Select,
  TimePicker,
  Typography,
  Upload,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import moment from "moment";
import { useCreateMovie } from "../../hooks/mutation/movie";

const { Title } = Typography;

const buttonItemLayout = {
  wrapperCol: {
    span: 18,
    offset: 2,
  },
};

const CreateMovie = () => {
  const [name, setName] = useState();
  const [desc, setDesc] = useState();
  const [category, setCategory] = useState();
  const [language, setLanguage] = useState();
  const [genre, setGenre] = useState();
  const [runTime, setRunTime] = useState();
  const [releaseDate, setReleaseDate] = useState();
  const [rating, setRating] = useState();
  const [fileList, setFileList] = useState();

  const formData = new FormData();

  const { mutateAsync: createMovieAsync } = useCreateMovie();

  // Handle file change function for the Upload component
  const handleFileChange = ({ fileList }) => {
    setFileList(fileList);
  };

  function formatNumberToTime(totalMinutes) {
    // Calculate hours and minutes
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    // Construct the formatted time string
    let formattedTime = "";

    if (hours > 0) {
      formattedTime += `${hours} Hour${hours !== 1 ? "s" : ""}`;
    }

    if (hours > 0 && minutes > 0) {
      formattedTime += " ";
    }

    if (minutes > 0) {
      formattedTime += `${minutes} Minute${minutes !== 1 ? "s" : ""}`;
    }

    return formattedTime.trim();
  }

  function convertTimeToNumber(timeString) {
    // Split the timeString into hours and minutes
    const [hours, minutes] = timeString.split(":").map(Number);

    // Calculate the total number of minutes
    const totalMinutes = hours * 60 + minutes;

    return formatNumberToTime(totalMinutes);
  }

  const handleSubmit = async () => {
    try {
      const releaseDateOnly = releaseDate
        ? moment(releaseDate).format("D MMMM YYYY")
        : "";
      const runTimeOnly = runTime ? runTime.format("HH:mm") : "";
      const convertedTime = convertTimeToNumber(runTimeOnly);
      console.log(typeof convertedTime);

      formData.append("name", name);
      formData.append("description", desc);
      formData.append("category", category);
      formData.append("language", language);
      formData.append("genre", genre);
      formData.append("runtime", convertedTime);
      formData.append("releaseDate", releaseDateOnly);
      formData.append("certificate", rating);
      formData.append("movieImgUrl", fileList[0].originFileObj);

      await createMovieAsync(formData);
      console.log("Movie created successfully.");
    } catch (error) {
      console.error("Error creating movie:", error);
    }
  };

  return (
    <>
      <Title level={2}>Create Movie</Title>
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
            name="movie_name"
            rules={[
              {
                required: true,
                message: "Please enter Movie Name!",
              },
            ]}
          >
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Description"
            name="movie-desc"
            rules={[
              {
                required: true,
                message: "Please enter Movie Description!",
              },
            ]}
          >
            <Input.TextArea
              rows={4}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Select category">
            <Select value={category} onChange={(value) => setCategory(value)}>
              <Select.Option value="Now Playing">Now Playing</Select.Option>
              <Select.Option value="Upcoming">Upcoming movies</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Language"
            name="language"
            rules={[
              {
                required: true,
                message: "Please enter Movie Language!",
              },
            ]}
          >
            <Input
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Genre"
            name="genre"
            rules={[
              {
                required: true,
                message: "Please enter Movie Genre!",
              },
            ]}
          >
            <Input value={genre} onChange={(e) => setGenre(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Runtime"
            name="runtime"
            rules={[
              {
                required: true,
                message: "Please enter Movie Runtime!",
              },
            ]}
          >
            <TimePicker
              style={{ width: "100%" }}
              value={runTime}
              onChange={(value) => setRunTime(value)}
            />
          </Form.Item>
          <Form.Item
            label="Release Date"
            name="release_date"
            rules={[
              {
                required: true,
                message: "Please enter Movie Release Date!",
              },
            ]}
          >
            <DatePicker
              style={{ width: "100%" }}
              value={releaseDate}
              onChange={(value) => setReleaseDate(value)}
            />
          </Form.Item>
          <Form.Item label="Select Rating">
            <Select value={rating} onChange={(value) => setRating(value)}>
              <Select.Option value="ua">UA</Select.Option>
              <Select.Option value="a">A</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Upload" valuePropName="fileList">
            <Upload
              style={{ width: "100%" }}
              fileList={fileList}
              onChange={handleFileChange}
              beforeUpload={() => false}
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
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

export default CreateMovie;
