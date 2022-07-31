import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Card() {
  const baseURL = 'https://github.com/ZybartasRingys/ecommerce'
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      {
        console.log(response)
      }
    })
  }, [])

  return <div></div>
}

export default Card
