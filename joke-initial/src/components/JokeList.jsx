import Joke from "./Joke";
import { useJokesQuery } from "../hooks/useJokesQuery";
import FilterContext from "../context/FilterContext";
import { useContext } from "react";

// const jokes = [
//   {
//     id: 1,
//     joke: "Why do programmers prefer dark mode? Because light attracts bugs!",
//     vote: 5,
//     favorite: true,
//   },
//   {
//     id: 2,
//     joke: "How many programmers does it take to change a light bulb? None, that's a hardware issue.",
//     vote: 8,
//     favorite: false,
//   },
//   {
//     id: 3,
//     joke: "Why do Java developers wear glasses? Because they don’t see sharp.",
//     vote: 10,
//     favorite: true,
//   },
//   {
//     id: 4,
//     joke: "There are only 10 types of people in the world: those who understand binary and those who don’t.",
//     vote: 7,
//     favorite: false,
//   },
//   {
//     id: 5,
//     joke: "A SQL query walks into a bar, walks up to two tables and asks: 'Can I join you?'",
//     vote: 6,
//     favorite: true,
//   },
// ];

const JokeList = () => {
  const {data: jokes, isLoading, isError} = useJokesQuery();

  const {filter} = useContext(FilterContext);

  

  if(isLoading) return <p>Loading...</p>
  if(isError) return <p>Something went wrong!</p>


const filteredJokes = filter === "favorites" ? jokes.filter((t) => t.favorite) : jokes;

  return (
    <div>
      <h3>Programmer Jokes</h3>
      {filteredJokes.map((joke) => (
        <Joke key={joke.id} joke={joke} />
      ))}
    </div>
  );
};

export default JokeList;
