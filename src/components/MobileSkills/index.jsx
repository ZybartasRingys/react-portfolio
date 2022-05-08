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
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <Carousel
      className="skills-carousel"
      responsive={responsive}
      //   autoPlaySpeed={3000}
      //   removeArrowOnDeviceType={['tablet', 'mobile']}
      //   autoPlay={true}
      //   infinite={true}
    >
      <div className="item1">
        I know how to build some things with HTML CSS and JAVASCRIPT.
        <FontAwesomeIcon icon={faHtml5} className="icon" color="#f06529" />
        <FontAwesomeIcon icon={faCss3} className="icon" color="#2965f1" />
        <FontAwesomeIcon icon={faJs} className="icon" color="#f0db4f" />
      </div>
      <div className="item2">
        How to use SCSS as preproccesor and Bootstrap as CSS framework.
        <FontAwesomeIcon icon={faSass} className="icon" color="#f0db4f" />
        <FontAwesomeIcon icon={faBootstrap} className="icon" color="#f0db4f" />
      </div>
      <div className="item3">Principles of responsive web design.</div>
      <div className="item4">
        Some knowlegde and experience working with React.
        <FontAwesomeIcon icon={faReact} className="icon" color="#5ED4F4" />
      </div>
      <div className="item5">
        Basic knowlegde and experience working with Node Js and MongoDB.
        <FontAwesomeIcon icon={faNode} className="icon" color="#3c873a" />
      </div>
      <div className="item6">
        How to use git and github
        <FontAwesomeIcon icon={faGitAlt} className="icon" color="#f34f29" />
      </div>
      <div className="item7">Figma</div>
    </Carousel>
  )
}

export default MobileSkills
