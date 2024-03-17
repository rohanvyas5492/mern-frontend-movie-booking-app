import { Col, Layout, Row, Typography } from "antd";
import MovieCard from "../../components/homepage/MovieCard";
import HomeSlider from "../../components/homepage/Slider";
import Navbar from "../../components/homepage/Navbar";
import { useGetAllMovies } from "../../hooks/query/movie";
import NewsLetter from "../../components/homepage/Newsletter";
import Loading from "../../components/homepage/Loading";

const Home = () => {
  const { data: movies, isLoading, error } = useGetAllMovies();

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  if (error) {
    return <>Error....</>;
  }
  return (
    <>
      <Layout>
        <Navbar />
        <HomeSlider />
        <Row justify="center">
          <Col span={18}>
            <Typography.Title level={2} className="movie-section-head">
              Now Playing
            </Typography.Title>
          </Col>
        </Row>
        <Row justify="center" style={{ marginTop: 10 }}>
          <Col span={18}>
            <Row justify="center">
              {movies.map((movie) => {
                return (
                  <Col span={6} className="movie-card-col">
                    <MovieCard key={movie._id} {...movie} />
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
        <NewsLetter />
      </Layout>
    </>
  );
};

export default Home;
