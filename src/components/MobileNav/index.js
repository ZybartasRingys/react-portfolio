import './index.scss'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faEnvelope,
  faCode,
  faGear,
} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const MobileNav = () => {
  return (
    <div className="mobile-nav-bar">
      <div className="page-links">
        <NavLink activeclassname="active" to="/">
          <FontAwesomeIcon
            icon={faHome}
            color="#4d4d4e"
            className="mobile-nav-links"
          />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon
            icon={faUser}
            color="#4d4d4e"
            className="mobile-nav-links"
          />
        </NavLink>
        <NavLink exact="true" className="skills-link" to="/skills">
          <FontAwesomeIcon
            icon={faGear}
            color="#4d4d4e"
            className="mobile-nav-links"
          />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/Contact"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            color="#4d4d4e"
            className="mobile-nav-links"
          />
        </NavLink>
      </div>
      <div className="social-links">
        <div className="hamburger">
          <ul>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/%C5%BEybartas-ringys/"
                className="mobile-icon"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/ZybartasRingys"
                className="mobile-icon"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>

            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.frontendmentor.io/profile/ZybartasRingys"
                className="mobile-icon"
              >
                <FontAwesomeIcon icon={faCode} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MobileNav
