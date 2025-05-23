import axios from "axios";

export const loginUser = async (formData) => {
  const response = await axios.post(
    "http://localhost:3001/api/login",
    formData
  );
  return response.data;
};
