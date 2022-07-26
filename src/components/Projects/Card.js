import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Card() {
  return (
    <div className="card">
      <div className="links">
        <Link to="/about">
          <FontAwesomeIcon
            icon={faFile}
            className="card-icon"
            color="#1ba098"
          />
        </Link>

        <Link to="/about">
          <FontAwesomeIcon
            icon={faUpRightFromSquare}
            className="card-icon"
            color="#1ba098"
          />
        </Link>
      </div>
      <div className="card-text">
        <h3 className="project-title">
          Modern Full Stack ECommerce React Application with Stripe Sanity IO
        </h3>
        <p className="project-desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam dolore
          deserunt libero porro facere, dolor sequi omnis dolorem cupiditate
          nobis quia aliquam praesentium itaque aperiam similique nostrum modi
          maiores quas.
        </p>

        <div className="project-info">
          <p className="project-stack">REACT SANITY.IO HEADLESS CMS STRIPE</p>
        </div>
      </div>
    </div>
  )
}

export default Card
