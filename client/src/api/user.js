import axios from "axios";

const URL = "http://localhost:5000";

export const createUser = async (user) => {
  return await axios.post(`${URL}/users`, user);
};
export const getUserByUsername = async (username) => {
  return await axios.get(`${URL}/users/username/${username}`);
};
