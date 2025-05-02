import React from 'react'
import Joke from './components/Joke'
import JokeList from './components/jokeList'
import JokeForm from './components/jokeForm'
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import { fetchDBStore } from './reducers/jokeReducer'
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDBStore());
    //fetchTasks().then((tasks) => dispatch(setInitialTasks(tasks)));
  }, []);
  return (
    <div>
      <h1>Programmer Jokes</h1>
      <h2>Jokes</h2>
      
      <JokeList />
      <JokeForm />
      
    </div>
  )
}

export default App