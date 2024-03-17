import { useMutation } from "@tanstack/react-query";
import { apiInstance } from "../../api/index";

export const useCreateTheater = () => {
  const mutation = useMutation({
    mutationFn: async function ({ name, location, address, contactInfo }) {
      const data = await apiInstance.post("/theaters/create-theater", {
        name,
        location,
        address,
        contactInfo,
      });
      return data;
    },
    onSuccess: (response) => {
      console.log(response);
    },
  });
  return mutation;
};
