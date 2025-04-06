import { useDispatch } from "react-redux";
import { favorite } from "../actions/jokeActions";

const Joke = ({ joke }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <span>{joke.joke}</span>
      <br />
      
      
      <button onClick={() => dispatch({ type: "UPVOTE", payload: joke.id })}>
        Upvote
      </button>
      <span> {joke.vote} </span>
      <button onClick={() => dispatch({ type: "DOWNVOTE", payload: joke.id })}>
        Downvote
      </button>
      <br />
      <span>
        <em>{joke.favorite ? "(Favorite) " : ""}</em>
      </span>
        <span
        style={{ textDecoration: "underline", cursor: "pointer" }}
        onClick={() => dispatch(favorite(joke.id))}
      >
        {joke.favorite ? "Remove from Favorites" : "Add to Favorites"}
      </span>
      <hr></hr>
    </div>
  );
};

export default Joke;
