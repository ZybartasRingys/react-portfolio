import './index.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

const MobileSocialLinks = () => {
  return (
    <div className="mobile-social-links">
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
  )
}

export default MobileSocialLinks
