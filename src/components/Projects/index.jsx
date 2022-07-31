import './index.scss'
import Card from './Card'
import Loader from 'react-loaders'

const Projects = () => {
  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects
