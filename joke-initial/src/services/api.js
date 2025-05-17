import axios from "axios";

const API = "http://localhost:3001/jokes";

const api = axios.create({ baseURL: API });

export const fetchJokes = async () => {
  const res = await api.get("/");
  return res.data;
};

export const createJoke = async (joke) => {
  const res = await api.post("/", joke);
  return res.data;
};

export const updateJoke = async (joke) => {
  const res = await api.put(`/${joke.id}`, joke);
  return res.data;
};

export const deleteJoke = async (joke) => {
  const res = await api.delete(`/${joke.id}`)
  return res.data;
}

export const upvoteJoke = async (joke) => {
    const res = await api.put(`/${joke.id}`,{
        ...joke,
        vote: joke.vote + 1,
    }  );
    return res.data;
}

export const downvoteJoke = async (joke) => {
  const res = await api.put(`/${joke.id}`,{
        ...joke,
        vote: joke.vote - 1,
    }  );
  return res.data;
}
