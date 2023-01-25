import axios from "axios";

const URL = "http://localhost:5000";

export const createUser = async (user) => {
  return await axios.post(`${URL}/users`, user);
};
export const getUserByUsername = async (username) => {
  return await axios.get(`${URL}/users/username/${username}`);
};
export const getUserById = async (userId) => {
  return await axios.get(`${URL}/users/${userId}`);
};
export const updateUsername = async (userId, username) => {
  return await axios.patch(`${URL}/users/${userId}`, username);
};
