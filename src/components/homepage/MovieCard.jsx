import React from "react";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const MovieCard = ({ name, genre, movieImgUrl, _id }) => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/movies/${id}`);
  };

  return (
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={<img alt={name} src={`http://localhost:8000/${movieImgUrl}`} />}
      onClick={() => handleCardClick(_id)}
    >
      <Meta title={name} description={genre} />
    </Card>
  );
};

export default MovieCard;
