import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import React from 'react'

import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const myFunction = async () => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 5500)
  }
  const greetingArray = [
    'H',
    'e',
    'l',
    'l',
    'o',
    ',',
    '',
    'n',
    'i',
    'c',
    'e',
    '',
    't',
    'o',
    '',
    'm',
    'e',
    'e',
    't',
    '',
    'y',
    'o',
    'u',
    '!',
  ]

  const nameArray = ['i', "'", 'm', '', 'Ž', 'y', 'b', 'a', 'r', 't', 'a', 's']

  useEffect(() => {
    myFunction()
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={greetingArray}
              idx={28}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={28}
            />
          </h1>

          <p>Front-end coder / JavaScript'er / Programming learner </p>

          <h2>
            I'm looking for a chance to start my developer carrer or any
            project!{' '}
          </h2>
        </div>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
