import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [jokes,setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data)
    })
    .catch((error) => {
      console.log(error);
    })
  })

  return (
    <>
      <h2>My jokes
      </h2>
      <hr />
      <p>Jokes: {jokes.length}</p>
      {
        jokes.map((joke,index) => (
          
          <div key={index}>
            
            <h3>{joke.title}</h3>
            <p>{joke.content}</p><hr />
          </div>
          
        ))
      }
    </>
  )
}

export default App
