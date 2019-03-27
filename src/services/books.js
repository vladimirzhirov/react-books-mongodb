import axios from "axios";

export const add = values => {
  return axios.post("http://localhost:4000/books/add", values);
};

export const update = (id, values) => {
  return axios.post(`http://localhost:4000/books/update/${id}`, values);
};

export const get = id => {
  return axios.get(`http://localhost:4000/books/get/${id}`);
};

export const getAll = () => {
  return axios.get("http://localhost:4000/books");
};

export const remove = id => {
  return axios.get(`http://localhost:4000/books/delete/:${id}`);
};
