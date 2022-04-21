import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faReact,
  faNode,
  faCss3,
  faGitAlt,
  faHtml5,
  faJs,
} from '@fortawesome/free-brands-svg-icons'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 5000)
  }, [])
  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'S',
                'k',
                'i',
                'l',
                'l',
                's',
                '',
                '&',
                '',
                'E',
                'x',
                'p',
                'e',
                'r',
                'i',
                'e',
                'n',
                'c',
                'e',
              ]}
              idx={30}
            />
          </h1>
          <div className="skills-zone">
            <h2 class="things">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              ut.
            </h2>
            <ul class="skills-list">
              <li>
                I know how to build some things with HTML CSS and JAVASCRIPT.
              </li>
              <li>
                How to use SCSS as preproccesor and Bootstrap as CSS framework.
              </li>
              <li>Principles of responsive web design.</li>
              <li>Some knowlegde and experience of React.</li>
              <li>
                Basic knowlegde and experience working with Node Js and MongoDB
              </li>
              <li>How to use git and github</li>
              <li>Figma</li>
            </ul>
          </div>

          <div className="icons">
            <FontAwesomeIcon icon={faJs} color="#5ED4F4" />
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            <FontAwesomeIcon icon={faNode} color="#5ED4F4" />
            <FontAwesomeIcon icon={faCss3} color="#5ED4F4" />
            <FontAwesomeIcon icon={faGitAlt} color="#5ED4F4" />
            <FontAwesomeIcon icon={faHtml5} color="#5ED4F4" />
          </div>
        </div>
      </div>

      {/* <Loader type="pacman" /> */}
    </>
  )
}

export default Skills
