import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3001/jokes" });

export const fetchJokes = async () => {
  const res = await api.get("/");
  return res.data;
};

export const upvoteJokes = async (joke) => {
    const res = await api.put(`/${joke.id}`, joke);
    return res.data;
};

export const downvoteJokes = async (joke) => {
  const res = await api.put(`/${joke.id}`, joke);
  return res.data;
};

export const favoriteJokes = async (joke) => {
  const res = await api.put(`/${joke.id}`, joke);
  return res.data;
};

export const addJokeToDB = async (joke) => {
    const res = await api.post("/", joke);
    return res.data;
};

