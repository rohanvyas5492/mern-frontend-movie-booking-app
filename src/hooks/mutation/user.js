import { useMutation } from "@tanstack/react-query";
import { apiInstance } from "../../api/index";

export const useSignInUser = () => {
  const mutation = useMutation({
    mutationFn: async function ({ email, password }) {
      const data = await apiInstance.post("/auth/login", {
        email,
        password,
      });
      return data;
    },
    onSuccess: (response) => {
      const token = response.data.token;
      localStorage.setItem("token", token);
    },
  });
  return mutation;
};
