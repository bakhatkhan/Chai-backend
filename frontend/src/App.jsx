import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes , setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
   .then(res => setJokes(res.data))
  },[])

  return (
    <>
    <h2 className='Title'>Here we've list of {jokes.length} jokes to Show-up</h2>

    {
      jokes.map(joke => (
        <div className='inner' key={joke.id}>
          <h3 className='subTitle'>{joke.title}</h3>
          <hr></hr>
          <p className='desc'>{joke.content}</p>
        </div>
      ))
    }
    </>
  )
}

export default App
