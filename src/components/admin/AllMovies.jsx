import React from "react";
import { Space, Table, Tag, Button, Typography } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"; // Import Ant Design icons for edit and delete buttons

const { Title } = Typography;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Language",
    dataIndex: "language",
    key: "language",
  },
  {
    title: "Genre",
    dataIndex: "genre",
    key: "genre",
  },
  {
    title: "Release Date",
    dataIndex: "releasedate",
    key: "releasedate",
  },
  {
    title: "Runtime",
    dataIndex: "runtime",
    key: "runtime",
  },
  {
    title: "Certificate",
    dataIndex: "certificate",
    key: "certificate",
  },
  {
    title: "Actions",
    key: "actions",
    render: (text, record) => (
      <span>
        <Button
          type="link"
          icon={<EditOutlined />}
          onClick={() => handleEdit(record.key)}
        >
          Edit
        </Button>
        <Button
          type="link"
          icon={<DeleteOutlined />}
          onClick={() => handleDelete(record.key)}
        >
          Delete
        </Button>
      </span>
    ),
  },
];

const data = [
  {
    name: "Shaitaan",
    description:
      "Kabir and his family`s fun weekend retreat takes a nightmarish turn when they let a friendly but mysterious stranger into their house. As the clock ticks, the family will be forced to confront their worst fears in this gripping, edge-of-the-seat supernatural-thriller that deals with the sinister elements of Indian Black Magic.",
    category: "Now Playing",
    language: "Hindi",
    genre: "Supernatural, Thriller",
    releasedate: "8 Mar, 2024",
    runtime: "2h 12m",
    certificate: "UA",
  },
];
const handleEdit = (key) => {
  // Implement edit logic
  console.log("Edit item with key:", key);
};

const handleDelete = (key) => {
  // Implement delete logic
  console.log("Delete item with key:", key);
};

const AllMovies = () => {
  return (
    <>
      <Title level={2}>All Movies</Title>
      <Table columns={columns} dataSource={data} />
    </>
  );
};
export default AllMovies;
