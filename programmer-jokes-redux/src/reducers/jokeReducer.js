import { createSlice } from "@reduxjs/toolkit";
import {fetchJokes, upvoteJokes, downvoteJokes, favoriteJokes, addJokeToDB } from "../services/jokeServices";

const jokeSlice = createSlice({
  name: "jokes",
  initialState: [],
  reducers: {
    setInitialJokes: (state, action) => {
      return action.payload;
    },
    add: (state, action) => {
      state.push(action.payload);
    },
    upvote: (state, action) => {
      return state.map((joke) =>
        joke.id === action.payload ? { ...joke, vote: joke.vote + 1 } : joke
      );
    },
    downvote: (state, action) => {
      return state.map((joke) =>
        joke.id === action.payload ? { ...joke, vote: joke.vote - 1 } : joke
      );
    },
    favorite: (state, action) => {
      return state.map((joke) =>
        joke.id === action.payload ? { ...joke, favorite: !joke.favorite} : joke
      );
    }
  },
});

export const fetchDBStore = () => {
  return async (dispatch) => {
    const jokes = await fetchJokes();
    // handle redux store updates
    dispatch(setInitialJokes(jokes));
  }
}

export const addDBJokes = (joke) => {
  return async (dispatch) => {
    const savedJoke = await addJokeToDB(joke);
    dispatch(add(savedJoke));
  };
};

export const upvoteDBJoke = (joke) => {
  return async (dispatch) => {
    const updated = await upvoteJokes({ ...joke, vote: joke.vote + 1 });
    dispatch(upvote(updated.id));
  };
};

export const downvoteDBJoke = (joke) => {
  return async (dispatch) => {
    const updated = await downvoteJokes({ ...joke, vote: joke.vote - 1 });
    dispatch(downvote(updated.id));
  };
};

export const favoriteDBJoke = (joke) => {
  return async (dispatch) => {
    const updated = await favoriteJokes({ ...joke, favorite: !joke.favorite });
    dispatch(favorite(updated.id));
  };
};


// const jokesReducer = (state = programmerJokes, action) => {
//     switch (action.type) {
//         case "ADD": {
//             const joke = {
//                 id: Math.random().toString(36).slice(2, 11),
//                 joke: action.payload,
//                 vote: 0,    
//                 favorite: false
//             }
//             return [...state, joke];
//         }
//         case "UPVOTE": {
//             return state.map((joke) =>
//                 joke.id === action.payload ? { ...joke, vote: joke.vote + 1 } : joke
//               );
//         }
//         case "DOWNVOTE": {
//             return state.map((joke) =>
//                 joke.id === action.payload ? { ...joke, vote: joke.vote - 1 } : joke
//               );
//         }
//         case "FAVORITE": {
//             return state.map((joke) =>
//                 joke.id === action.payload ? { ...joke, favorite: !joke.favorite} : joke
//               );
//         }
//         default:
//             return state;
//     }
// }


export default jokeSlice.reducer;
export const { add, favorite, setInitialJokes, downvote, upvote  } = jokeSlice.actions;
