import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateJoke, deleteJoke, upvoteJoke, downvoteJoke } from "../services/api";
import { useContext } from "react"; 
import NotificationContext from "../context/NotificationContext";

const Joke = ({ joke }) => {
  const queryClient = useQueryClient(); 
  const dispatch = useContext(NotificationContext); 

  const updateMutation = useMutation({
    mutationFn: updateJoke,
    onSuccess: () => {
      queryClient.invalidateQueries(["jokes"]);
    },
    onError: () => console.log("Error while updating"),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteJoke,
    onSuccess: () => {
      queryClient.invalidateQueries(["jokes"]);
    },
    onError: () => console.log("Error while deleting"),
  });

  const upvoteMutation = useMutation({
    mutationFn: upvoteJoke,
    onSuccess: () => {
      queryClient.invalidateQueries(["jokes"]);
    },
    onError: () => console.log("Error while upvoting"),
  });

  const downvoteMutation = useMutation({
    mutationFn: downvoteJoke,
    onSuccess: () => {
      queryClient.invalidateQueries(["jokes"]);
    },
    onError: () => console.log("Error while downvoting"),
  });

  const handleUpvote = () => {
    upvoteMutation.mutate(joke, {
      onSuccess: () => {
        dispatch({
          type: "SHOW_NOTIFICATION",
          payload: {
            message: "Upvoted " + joke.joke,
            type: "good",
          },
        });
        setTimeout(() => {
          dispatch({ type: "HIDE_NOTIFICATION" });
        }, 3000);
      },
    });
  };

  const handleDownvote = () => {
    downvoteMutation.mutate(joke, {
      onSuccess: () => {
        dispatch({
          type: "SHOW_NOTIFICATION",
          payload: {
            message: "Downvoted " + joke.joke,
            type: "bad",
          },
        });
        setTimeout(() => {
          dispatch({ type: "HIDE_NOTIFICATION" });
        }, 3000);
      },
    });
  };

  const handleToggleFavorite = () => {
    updateMutation.mutate(
      { ...joke, favorite: !joke.favorite },
      {
        onSuccess: () => {
          dispatch({
            type: "SHOW_NOTIFICATION",
            payload: {
              message:
                (joke.favorite
                  ? "Removed from favorites: "
                  : "Added to favorites: ") + joke.joke,
              type: joke.favorite ? "bad" : "good",
            },
          });
          setTimeout(() => {
            dispatch({ type: "HIDE_NOTIFICATION" });
          }, 3000);
        },
      }
    );
  };

  const handleDelete = () => {
    deleteMutation.mutate(joke, {
      onSuccess: () => {
        dispatch({
          type: "SHOW_NOTIFICATION",
          payload: {
            message: "Deleted " + joke.joke,
            type: "bad",
          },
        });
        setTimeout(() => {
          dispatch({ type: "HIDE_NOTIFICATION" });
        }, 3000);
      },
    });
  };

  return (
    <div>
      <p>{joke.joke}</p>
      <div>
        <button onClick={handleUpvote}>Upvote</button>
        <span>{joke.vote}</span>
        <button onClick={handleDownvote}>Downvote</button>
      </div>
      <div>
        <span>
          <em>{joke.favorite ? "Favorite Joke " : ""}</em>
        </span>
        <span
          style={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={handleToggleFavorite}
        >
          {joke.favorite ? "Remove from favorites" : "Add to Favorites"}
        </span>
      </div>
      <div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Joke;
