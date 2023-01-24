import axios from "axios";

const URL = "http://localhost:5000";

export const createUser = async (user) => {
  return await axios.post(`${URL}/users`, user);
};
