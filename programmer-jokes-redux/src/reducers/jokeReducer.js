const programmerJokes = [
    {
      id: 1,
      joke: "Why do programmers prefer dark mode? Because light attracts bugs!",
      vote: 0,
      favorite: false,
    },
    {
      id: 2,
      joke: "Why do Java developers wear glasses? Because they don't C#.",
      vote: 0,
      favorite: false,
    },
    {
      id: 3,
      joke: "A SQL query walks into a bar, walks up to two tables and asks: 'Can I join you?'",
      vote: 0,
      favorite: false,
    },
    {
      id: 4,
      joke: "How do you comfort a JavaScript bug? You console it.",
      vote: 0,
      favorite: false,
    },
    {
      id: 5,
      joke: "Why was the function feeling sad? It didn’t get a callback!",
      vote: 0,
      favorite: false,
    },
    {
      id: 6,
      joke: "Why did the developer go broke? Because he used up all his cache!",
      vote: 0,
      favorite: false,
    }
];

const jokesReducer = (state = programmerJokes, action) => {
    switch (action.type) {
        case "ADD": {
            const joke = {
                id: Math.random().toString(36).slice(2, 11),
                joke: action.payload,
                vote: 0,    
                favorite: false
            }
            return [...state, joke];
        }
        case "UPVOTE": {
            return state.map((joke) =>
                joke.id === action.payload ? { ...joke, vote: joke.vote + 1 } : joke
              );
        }
        case "DOWNVOTE": {
            return state.map((joke) =>
                joke.id === action.payload ? { ...joke, vote: joke.vote - 1 } : joke
              );
        }
        case "FAVORITE": {
            return state.map((joke) =>
                joke.id === action.payload ? { ...joke, favorite: !joke.favorite} : joke
              );
        }
        default:
            return state;
    }
}


export default jokesReducer;