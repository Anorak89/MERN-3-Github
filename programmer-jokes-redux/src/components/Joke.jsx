import { useDispatch } from "react-redux";
import { favorite } from "../actions/jokeActions";
import { upvoteDBJoke, downvoteDBJoke, favoriteDBJoke } from "../reducers/jokeReducer";

const Joke = ({ joke }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <span>{joke.joke}</span>
      <br />
      
      
      <button onClick={() => dispatch(upvoteDBJoke(joke))}>Upvote</button>
      <span> {joke.vote} </span>
      <button onClick={() => dispatch(downvoteDBJoke(joke))}>Downvote</button>
      <br />
      <span>
        <em>{joke.favorite ? "(Favorite) " : ""}</em>
      </span>
        <span
        style={{ textDecoration: "underline", cursor: "pointer" }}
        onClick={() => dispatch(favoriteDBJoke(joke))}
      >
        {joke.favorite ? "Remove from Favorites" : "Add to Favorites"}
      </span>
      <hr></hr>
    </div>
  );
};

export default Joke;
