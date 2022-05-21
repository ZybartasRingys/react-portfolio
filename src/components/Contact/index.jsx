import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  const setAnimateClass = async () => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 5000)
  }

  useEffect(() => {
    setAnimateClass()
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_4w1jij8',
        'template_8i4tc6u',
        form.current,
        'dG942rS238fWIektk'
      )
      .then(
        () => {
          console.log('SUCCESS!')
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        (error) => {
          alert('Failed to send the message, please try again')
          console.log('FAILED...', error)
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone__contact">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>

          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>

            <p>
              I'm interested in any opportunities - especially Frontend realated
              positions. However, if you have other question, don't hesitate to
              contact me using form below.
            </p>
          </div>
        </div>
        <div className="map">
          <div className="info-map">
            Žybartas Ringys,
            <br />
            Lithuania,
            <br />
            <span>DeveloperZR92@gmail.com</span>
          </div>
          <div className="map-wrap">
            <MapContainer center={[55.891686, 21.256541]} zoom={13}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[55.891686, 21.256541]}>
                <Popup>Try to find me there </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
