import React from 'react'
import Joke from './components/Joke'
import JokeList from './components/jokeList'
import JokeForm from './components/jokeForm'
const App = () => {
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