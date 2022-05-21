import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const myFunction = async () => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 5500)
  }

  useEffect(() => {
    myFunction()
  }, [])

  const aboutArr = ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArr}
              idx={15}
            />
          </h1>

          <div className="about-text">
            <h2>
              I'm very ambitious front-end developer looking for a role in
              established IT company with the opportunity to work with the
              latest technologies on challenging and diverse projects.
            </h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              sequi dolores autem sunt deleniti odit! Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Explicabo illo aperiam alias,
              aliquam ad natus vel.
            </p>

            <p>
              You can find more information about my powers @ my skills page
            </p>
            <Link to="/skills" className="flat-button">
              TO MY SKILLS
            </Link>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
