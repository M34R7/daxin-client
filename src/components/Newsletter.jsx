//Import components
import { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { saveSubscriptions } from '../store/slices/newsletter'
import { useTranslation } from 'react-i18next'

//Import styles
import '../assets/styles/newsletter.scss'

export default function Newsletter() {
  //Initialization variables
  const { t, i18n } = useTranslation()
  const modalBlock = useRef(null)
  const dispatch = useDispatch()

  //Initialization form manager
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      modal: {},
    },
    reValidateMode: 'onChange',
  })

  //Initialization state manager
  const [modal, setModal] = useState(false)

  //Function for close modal
  useEffect(() => {
    const mouseUp = e => {
      if (e.target === modalBlock.current) {
        setModal(false)
      }
    }
    document.addEventListener('mouseup', mouseUp)
    return function () {
      document.removeEventListener('mouseup', mouseUp)
    }
  })

  //Request for send email
  const onSubmit = async data => {
    await dispatch(saveSubscriptions(data.modal))
    reset()
    setModal(false)
  }

  //Initialization newsletter modal
  const newsletterModal = modal ? (
    <div
      className='newsletter-modal'
      ref={modalBlock}
    >
      <div
        className='content'
        onClick={e => e.stopPropagation()}
      >
        <div>
          <h2>{t('Newsletter')}</h2>
          <span onClick={() => setModal(false)}>X</span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <p>{t('Name')}*</p>
            <input
              placeholder={t('NamePlaceholder')}
              type='text'
              {...register('modal.name', {
                required: 'This field is required',
              })}
            />
          </label>
          <label>
            <p>{t('Email')}*</p>
            <input
              placeholder={t('EmailPlaceholder')}
              type='text'
              {...register('modal.email', {
                required: 'This field is required',
              })}
            />
          </label>
          <label>
            <p>{t('Phone')}*</p>
            <input
              placeholder={t('PhonePlaceholder')}
              type='number'
              {...register('modal.phone', {
                required: 'This field is required',
              })}
            />
          </label>
          <input
            type='submit'
            value={t('Subscribe')}
            disabled={!isValid}
          />
        </form>
      </div>
    </div>
  ) : null

  return (
    <section className='newsletter'>
      <div className='container'>
        <div>
          <h2>{t('Newsletter')}</h2>
          <p>{t('NewsletterDescription')}</p>
        </div>
        <button onClick={() => setModal(!modal)}>{t('Subscribe')}</button>
      </div>
      {newsletterModal}
    </section>
  )
}
