import { useDispatch } from "react-redux";
import { add } from "../actions/jokeActions";

const JokeForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Joke Submitted :", event.target.joke.value);
    dispatch(add(event.target.joke.value));
    event.target.joke.value = "";
  };

  return (
    <div>
      <h3>Create a new task </h3>
      <form onSubmit={handleSubmit}>
        <input name="joke" type="text" placeholder="Enter Joke Description" />
        <button type="submit">Add Joke</button>
      </form>
    </div>
  );
};

export default JokeForm;
