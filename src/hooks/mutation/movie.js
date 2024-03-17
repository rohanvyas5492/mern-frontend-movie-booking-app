import { useMutation } from "@tanstack/react-query";
import { apiInstance } from "../../api/index";

export const useCreateMovie = () => {
  const createMovieMutation = useMutation({
    mutationFn: async function (formData) {
      for (const [key, value] of formData) {
        console.log(`${key}: ${value}\n`);
      }
      try {
        const data = await apiInstance.post(
          "/movies/create-new", // Corrected endpoint URL for creating a movie
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Movie created successfully:", data);
        return data;
      } catch (error) {
        console.error("Error creating movie:", error);
        throw error; // Re-throwing the error so it can be caught by the caller
      }
    },
    onError: (error) => {
      console.error("Error creating movie:", error);
    },
    onSuccess: (data) => {
      console.log("Movie created successfully:", data);
    },
  });

  return createMovieMutation;
};
