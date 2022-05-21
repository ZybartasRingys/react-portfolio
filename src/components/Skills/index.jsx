import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import MobileSkills from '../MobileSkills'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const myFunction = async () => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 5000)
  }

  useEffect(() => {
    myFunction()
  }, [])

  const skillsArray = ['S', 'k', 'i', 'l', 'l', 's', '', '&', '']
  const experienceArray = ['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']
  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={36}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={experienceArray}
              idx={36}
            />
          </h1>

          <div className="skills-zone">
            <ul className="skills-list">
              <li>I know how to build things with HTML CSS and JAVASCRIPT.</li>
              <li>
                How to use SCSS as preproccesor and Bootstrap as CSS framework.
              </li>
              <li>Principles of responsive web design.</li>
              <li>Some knowlegde and experience working with React.</li>
              <li>
                Basic knowlegde and experience working with Node JS and MongoDB.
              </li>
              <li>How to use git and github.</li>
              <li>How to use Figma for pixel perfect design.</li>
            </ul>

            <MobileSkills />

            <div className="skills-links">
              <p>
                You can find my completed front-end projects @
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.frontendmentor.io/profile/ZybartasRingys"
                  className="link"
                >
                  Frontendmentor
                </a>
                and more of my code @
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/ZybartasRingys"
                  className="link"
                >
                  Github
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Skills
