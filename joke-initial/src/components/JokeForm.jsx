import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createJoke } from "../services/api";
import NotificationContext from "../context/NotificationContext";
import { useContext } from "react";



const JokeForm = () => {
  const dispatch = useContext(NotificationContext);
  const queryClient = useQueryClient();
  const addMutation = useMutation({
    mutationFn: createJoke,
    onSuccess: ()=>{
      queryClient.invalidateQueries(["jokes"])

    },
    onError:() => console.log("Error while adding a joke")
  })
  const handleSubmit = async (event) => {
    event.preventDefault();
    addMutation.mutate({joke: event.target.joke.value, vote: 0, favorite: false});
    dispatch({
      type: "SHOW_NOTIFICATION",
      payload: {
        message: "Added " + event.target.joke.value,
        type: "good",
      },
    });
    setTimeout(() => {
      dispatch({ type: "HIDE_NOTIFICATION" });
    }, 3000);
    event.target.joke.value = "";
  };

  return (
    <div>
      <h3>Why not another joke?</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter a new joke" name="joke" />
        <button type="submit">Add Joke</button>
      </form>
    </div>
  );
};

export default JokeForm;
