import { Link } from 'react-router-dom'

import './index.scss'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hello, nice to meet you ! <br /> I'm <span className="z">Ž</span>
          ybartas <br /> I'm front-end coder
        </h1>

        <h2>
          I really enjoy learning new things about web development. <br />
          I'm looking for a chance to start my developer carrer or any project!{' '}
        </h2>

        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
