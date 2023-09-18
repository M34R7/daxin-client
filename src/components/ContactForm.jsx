//Import components
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { saveMessages } from '../store/slices/newsletter'

//Import styles
import '../assets/styles/contactForm.scss'

export default function ContactForm() {
  //Initialization variables
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

  //Request for send email
  const onSubmit = data => {
    dispatch(saveMessages(data.modal))
    reset()
  }

  return (
    <section className='contact-form'>
      <h2>CONTACT</h2>
      <p className='description'>
        For any information, you can contact us by filling in the form below.
        Thank you. (*) Required fields
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <p>Name*</p>
          <input
            type='text'
            {...register('modal.name', {
              required: 'This field is required',
            })}
          />
        </label>
        <label>
          <p>E-mail*</p>
          <input
            type='text'
            {...register('modal.email', {
              required: 'This field is required',
            })}
          />
        </label>
        <label>
          <p>Phone*</p>
          <input
            type='number'
            {...register('modal.phone', {
              required: 'This field is required',
            })}
          />
        </label>
        <label>
          <p>Your message*</p>
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
          value={'Send'}
          disabled={!isValid}
        />
      </form>
    </section>
  )
}
