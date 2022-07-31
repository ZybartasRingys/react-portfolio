import './index.scss'

import { Squash as Hamburger } from 'hamburger-react'

import { useState } from 'react'
import MobileSocialLinks from '../MobileSocialLinks'

const MobileHamburger = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <Hamburger
        toggled={isOpen}
        toggle={setOpen}
        size={19}
        distance="md"
        color="#1ba098"
      />
      {isOpen && <MobileSocialLinks />}
    </>
  )
}

export default MobileHamburger
