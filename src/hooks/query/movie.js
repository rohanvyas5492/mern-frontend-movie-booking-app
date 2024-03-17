import { useQuery } from "@tanstack/react-query";
import { apiInstance } from "../../api/index";

export const useGetAllMovies = () => {
  const query = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const { data } = await apiInstance.get("/movies/all-movies/");
      return data.data;
    },
  });
  return query;
};

export const useGetMovieById = (id) => {
  const query = useQuery({
    queryKey: ["movie", id],
    queryFn: async () => {
      try {
        const { data } = await apiInstance.get(`movies/movie/${id}`);
        return data.data;
      } catch (error) {
        throw new Error("Failed to fetch movie data");
      }
    },
  });
  return query;
};
