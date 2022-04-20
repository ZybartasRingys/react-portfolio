import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <div className="container skills-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['S', 'k', 'i', 'l', 'l', 's', '', '&', 'E']}
            idx={9}
          />
        </h1>
        <p>
          I’m not a designer but I have a good sense of aesthetics, and
          experience in responsive, mobile-first web design. I put special
          effort into optimizing my code and providing the best user experience.
          I would love to give you any kind of support also after the project's
          completion. I guarantee a commitment during work on your project.
        </p>
      </div>
    </div>
  )
}

export default Skills
