import axios from "axios";

const URL = "http://localhost:5000";

// users
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
export const updatePassword = async (userId, password) => {
  return await axios.patch(`${URL}/users/${userId}`, password);
};
export const deleteUser = async (userId) => {
  return await axios.delete(`${URL}/users/${userId}`);
};

// notes
export const createNote = async (note) => {
  return await axios.post(`${URL}/notes`, note);
};
export const deleteNotesOfUserId = async (userId) => {
  return await axios.delete(`${URL}/notes/delete/user/${userId}`);
};
export const getNotesOfUserId = async (userId) => {
  return await axios.get(`${URL}/notes/user/${userId}`);
};
