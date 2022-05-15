import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// icons

import {
  faReact,
  faNode,
  faCss3,
  faGitAlt,
  faHtml5,
  faJs,
  faBootstrap,
  faSass,
} from '@fortawesome/free-brands-svg-icons'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const MobileSkills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 2240, min: 1441 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1440, min: 1224 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1223, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  }

  return (
    <Carousel
      className="skills-carousel"
      responsive={responsive}
      autoPlaySpeed={5000}
      removeArrowOnDeviceType={['tablet', 'mobile']}
      autoPlay={true}
      infinite={true}
    >
      <div className="item1 carousel-items">
        I know how to build things with HTML CSS and JAVASCRIPT.
        <FontAwesomeIcon
          icon={faHtml5}
          className="mobile-icon"
          color="#f06529"
        />
        <FontAwesomeIcon
          icon={faCss3}
          className="mobile-icon"
          color="#2965f1"
        />
        <FontAwesomeIcon icon={faJs} className="mobile-icon" color="#f0db4f" />
      </div>
      <div className="item2 carousel-items">
        How to use SCSS as preproccesor and Bootstrap as CSS framework.
        <FontAwesomeIcon
          icon={faSass}
          className="mobile-icon"
          color="#f0db4f"
        />
        <FontAwesomeIcon
          icon={faBootstrap}
          className="mobile-icon"
          color="#f0db4f"
        />
      </div>
      <div className="item3 carousel-items">
        Principles of responsive web design.
      </div>
      <div className="item4 carousel-items">
        Some knowlegde and experience working with React.
        <FontAwesomeIcon
          icon={faReact}
          className="mobile-icon"
          color="#5ED4F4"
        />
      </div>
      <div className="item5 carousel-items">
        Basic knowlegde and experience working with Node Js and MongoDB.
        <FontAwesomeIcon
          icon={faNode}
          className="mobile-icon"
          color="#3c873a"
        />
      </div>
      <div className="item6 carousel-items">
        How to use git and github.
        <FontAwesomeIcon
          icon={faGitAlt}
          className="mobile-icon"
          color="#f34f29"
        />
      </div>
      <div className="item7 carousel-items">
        How to use Figma for pixel perfect design.
      </div>
    </Carousel>
  )
}

export default MobileSkills
