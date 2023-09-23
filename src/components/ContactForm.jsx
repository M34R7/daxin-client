//Import components
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { saveMessages } from '../store/slices/newsletter'
import { useTranslation } from 'react-i18next'

//Import styles
import '../assets/styles/contactForm.scss'

export default function ContactForm() {
  //Initialization variables
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()

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

  //Request for send email
  const onSubmit = data => {
    dispatch(saveMessages(data.modal))
    reset()
  }

  return (
    <section className='contact-form'>
      <h2>{t('Contact')}</h2>
      <p className='description'>{t('ContactDescription')}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <p>{t('Name')}*</p>
          <input
            type='text'
            {...register('modal.name', {
              required: 'This field is required',
            })}
          />
        </label>
        <label>
          <p>{t('Email')}*</p>
          <input
            type='text'
            {...register('modal.email', {
              required: 'This field is required',
            })}
          />
        </label>
        <label>
          <p>{t('Phone')}*</p>
          <input
            type='number'
            {...register('modal.phone', {
              required: 'This field is required',
            })}
          />
        </label>
        <label>
          <p>{t('Message')}*</p>
          <textarea
            {...register('modal.message', {
              required: 'This field is required',
            })}
          ></textarea>
        </label>
        <label className='checkbox'>
          <input
            type='checkbox'
            {...register('modal.terms', {
              required: 'This field is required',
            })}
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident,
            aliquid.
          </p>
        </label>
        <input
          type='submit'
          value={t('Send')}
          disabled={!isValid}
        />
      </form>
    </section>
  )
}
