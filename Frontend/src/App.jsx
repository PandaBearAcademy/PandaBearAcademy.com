import { useState } from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>Panda Bear Academy</h1>
        <Link to="/">About</Link>
      </header>
    </>
  )
}

export default App
