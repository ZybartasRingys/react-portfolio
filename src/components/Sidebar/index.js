import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faEnvelope,
  faCode,
  faGear,
} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      ZR
    </Link>

    <nav>
      <NavLink activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink exact="true" className="skills-link" to="/skills">
        <FontAwesomeIcon icon={faGear} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/Contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>

    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/%C5%BEybartas-ringys/"
          className="icon"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/ZybartasRingys"
          className="icon"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>

      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.frontendmentor.io/profile/ZybartasRingys"
          className="icon"
        >
          <FontAwesomeIcon icon={faCode} />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
