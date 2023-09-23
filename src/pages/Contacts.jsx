//Import components
import { useSelector } from 'react-redux'
import ContactForm from 'components/ContactForm'
import { useTranslation } from 'react-i18next'

//Import styles
import 'styles/contacts.scss'

export default function Contacts() {
  //Initialization variables
  const { t, i18n } = useTranslation()

  //Initialization state manager
  const contacts = useSelector(state => state.contactsReducer.contacts)

  return (
    <section className='contacts'>
      <h2>{t('Contacts')}</h2>
      <div className='contacts-data'>
        <div>
          <h3>{t('ShowRoom')}</h3>
          <p>
            {t('Adress')}: {contacts?.contacts?.showroom?.address}
          </p>
          <p>
            {t('Phone')}:
            <a href={`tel:${contacts?.contacts?.showroom?.phone1}`}>
              {contacts?.contacts?.showroom?.phone1}
            </a>
          </p>
          <p>
            {t('Phone')}:
            <a href={`tel:${contacts?.contacts?.showroom?.phone2}`}>
              {contacts?.contacts?.showroom?.phone2}
            </a>
          </p>
          <p>
            {t('Email')}:
            <a href={`mailto:${contacts?.contacts?.showroom?.email}`}>
              {contacts?.contacts?.showroom?.email}
            </a>
          </p>
          <iframe
            src={contacts?.contacts?.showroom?.map}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
        <div>
          <h3>{t('Production')}</h3>
          <p>
            {t('Adress')}: {contacts?.contacts?.production?.address}
          </p>
          <p>
            {t('Phone')}:
            <a href={`tel:+${contacts?.contacts?.production?.phone}`}>
              {contacts?.contacts?.production?.phone}
            </a>
          </p>
          <iframe
            src={contacts?.contacts?.production?.map}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
      <div className='contacts-form'>
        <ContactForm />
      </div>
    </section>
  )
}
