import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import './App.css'

function App() {
  return (
    <>
      <header>
        <Link to="/">Courses</Link>
        <h1>Panda Bear Academy</h1>
        <Link to="/">About</Link>
      </header>

      <main className="page">
        <section className="video-section">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ZjXuTefizF0"
            playing={false}
            controls
            width="100%"
            height="100%"
          />
        </section>
      </main>
    </>
  )
}

export default App
