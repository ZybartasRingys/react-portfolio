import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>

        <div className="about-text">
          <p>
            I'm very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            sequi dolores autem sunt deleniti odit!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
            illo aperiam alias, aliquam ad natus vel magnam ipsam quibusdam
            consectetur.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
