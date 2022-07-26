import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faEnvelope,
  faGear,
  faDiagramProject,
} from '@fortawesome/free-solid-svg-icons'
import MobileHamburger from '../MobileHamburger'

const MobileNav = () => {
  return (
    <div className="mobile-nav-bar">
      <Link className="mobile-logo" to="/">
        Logo
      </Link>

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
        <NavLink exact="true" className="projects-link" to="/projects">
          <FontAwesomeIcon
            icon={faDiagramProject}
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
      <MobileHamburger />
    </div>
  )
}

export default MobileNav
