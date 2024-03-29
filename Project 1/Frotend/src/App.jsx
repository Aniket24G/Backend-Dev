import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
import { response } from 'express'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((res) => {
      setJokes(res.data)
    })
    .catch((e) => console.log(e) )
  },[])

  return (
    <>
      <h1>Full stack development</h1>
      <p>Jokes: {jokes.length}</p>
      {
        jokes.map((joke, ind) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
