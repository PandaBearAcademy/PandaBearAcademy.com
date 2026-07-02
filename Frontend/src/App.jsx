import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import './App.css'

function App() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    for (let i = 0; i < 3; i++) {
      setVideos(prev => [...prev,
          <ReactPlayer
            url=""
            controls={true}
            width="50%"
            height="50%"
          />])
    }
  }, [])

  return (
    <>
      <header>
        <Link to="/">Courses</Link>
        <h1>Panda Bear Academy</h1>
        <Link to="/">About</Link>
      </header>

      <main className="page">
        <section className="video-section">
          {videos}
        </section>
      </main>
    </>
  )
}

export default App
