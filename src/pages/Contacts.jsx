//Import components
import { useSelector, useDispatch } from 'react-redux'
import ContactForm from 'components/ContactForm'

//Import styles
import 'styles/contacts.scss'

export default function Contacts() {
  //Initialization state manager
  const contacts = useSelector(state => state.contactsReducer.contacts)

  return (
    <section className='contacts'>
      <h2>CONTACTS</h2>
      <div className='contacts-data'>
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
          <iframe
            src={contacts?.contacts?.showroom?.map}
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
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
          <iframe
            src={contacts?.contacts?.production?.map}
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
      <div className='contacts-form'>
        <ContactForm />
      </div>
    </section>
  )
}
