import JokeList from "./components/JokeList";
import JokeFilter from "./components/JokeFilter";
import JokeForm from "./components/JokeForm";

const App = () => {
  return (
    <div>
      <h2>Code Jokes Central: Laugh While You Code</h2>
      <JokeFilter />
      <JokeList />
      <JokeForm />
    </div>
  );
};

export default App;
