//Import components
import { useEffect } from 'react'
import { getContacts } from '../store/slices/contacts'
import Icon from 'components/Icon'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

//Import styles
import 'styles/footer.scss'

//Import images
import logo from 'images/logowhite.svg'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  //Initialization variables
  const dispatch = useDispatch()

  //Initialization data from server
  const contacts = useSelector(state => state.contactsReducer.contacts)

  //Request for get contacts
  useEffect(() => {
    dispatch(getContacts())
  }, [])

  return (
    <footer>
      <section>
        <div className='container'>
          <img
            src={logo}
            alt='logo'
            className='logo'
          />
          <div className='main-section'>
            <div>
              <h2>SHOWROOM</h2>
              <p>Address: {contacts?.contacts?.showroom?.address}</p>
              <p>
                Phone:
                <a href={`tel:${contacts?.contacts?.showroom?.phone1}`}>
                  {contacts?.contacts?.showroom?.phone1}
                </a>
              </p>
              <p>
                Phone:
                <a href={`tel:${contacts?.contacts?.showroom?.phone2}`}>
                  {contacts?.contacts?.showroom?.phone2}
                </a>
              </p>
              <p>
                Email:
                <a href={`mailto:${contacts?.contacts?.showroom?.email}`}>
                  {contacts?.contacts?.showroom?.email}
                </a>
              </p>
              <div className='social'>
                <a
                  href='https://www.facebook.com/Stonedecorum/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Icon
                    color='#343b49'
                    size='25px'
                    image={<FaFacebookF />}
                  />
                </a>
                <a
                  href='https://www.instagram.com/stonedecorum/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Icon
                    color='#343b49'
                    size='25px'
                    image={<FaInstagram />}
                  />
                </a>
                <a
                  href='https://www.youtube.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Icon
                    color='#343b49'
                    size='25px'
                    image={<FaYoutube />}
                  />
                </a>
              </div>
            </div>
            <div>
              <h2>PRODUCERE & DEPOZIT</h2>
              <p>Adress: {contacts?.contacts?.production?.address}</p>
              <p>
                Phone:
                <a href={`tel:+${contacts?.contacts?.production?.phone}`}>
                  {contacts?.contacts?.production?.phone}
                </a>
              </p>
            </div>
            <div>
              <h2>PROJECTS</h2>
              <a
                href='https://stonedecorum.com/ro/catalog/stone-center'
                target='_blank'
                rel='noreferrer'
              >
                STONECENTER
              </a>
              <a
                href='https://stonedecorum.com/ro/catalog/home-decor'
                target='_blank'
                rel='noreferrer'
              >
                STONEDECORUM
              </a>
              <a
                href='https://seminee.md/'
                target='_blank'
                rel='noreferrer'
              >
                SEMINEE.MD
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <p>
          Copyright © {new Date().getFullYear()} Daxin-Bit SRL.
          <Link to='/terms'>All Rights Reserved</Link>.
        </p>
      </section>
    </footer>
  )
}
