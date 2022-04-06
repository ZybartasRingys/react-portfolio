import { Link } from 'react-router-dom'

import './index.scss'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hello, nice to meet you ! <br /> I'm <span className="z">Ž</span>
          ybartas
        </h1>
        <p>Front-end coder / JavaScript'er / Programming lover </p>

        <h2>
          I'm looking for a chance to start my developer carrer or any project!{' '}
        </h2>
      </div>
      <Link to="/contact" className="flat-button">
        CONTACT ME
      </Link>
    </div>
  )
}

export default Home
