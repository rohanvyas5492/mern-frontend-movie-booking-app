import React from "react";
import Navbar from "../../components/homepage/Navbar";
import { useGetMovieById } from "../../hooks/query/movie";
import { useParams } from "react-router-dom";
import { Button, Typography } from "antd";
import NewsLetter from "../../components/homepage/Newsletter";
import Loading from "../../components/homepage/Loading";

const MovieDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetMovieById(id);

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Handle error state
  }

  console.log(data);

  // Render details from data
  return (
    <>
      <Navbar />
      {/* Render movie details */}
      <section className="moviepage-section">
        <div justify="center" className="movie-details-row">
          <div className="movie-image-box">
            <img
              src={`http://localhost:8000/${data.movieImgUrl}`}
              alt={data.name}
            />
          </div>
          <div className="movie-details-col">
            <div className="category-box">{data.category}</div>
            <div className="movie-content-box">
              <Typography.Title level={2}>{data.name}</Typography.Title>
            </div>
            <div className="movie-content-box language runtime">
              <Typography.Title
                level={5}
              >{`${data.certificate}/${data.language}`}</Typography.Title>
              <Typography.Title
                level={5}
              >{`${data.releaseDate}/${data.runtime}`}</Typography.Title>
            </div>
            <div className="movie-content-box genre">
              <Typography.Title level={3}>Genres</Typography.Title>
              <Typography.Title level={5}>{data.genre}</Typography.Title>
            </div>
            <div className="movie-content-box desc">
              <Typography.Title level={3}>The Synopsis</Typography.Title>
              <Typography.Text>{data.description}</Typography.Text>
            </div>
            <div className="movie-content-box">
              <Button type="primary" size="large">
                Book Tickets
              </Button>
            </div>
          </div>
        </div>
        <NewsLetter />
      </section>
    </>
  );
};

export default MovieDetails;
