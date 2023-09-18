//Import components
import { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { saveSubscriptions } from '../store/slices/newsletter'

//Import styles
import '../assets/styles/newsletter.scss'

export default function Newsletter() {
  //Initialization variables
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

  //Function for  close modal
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
          <h2>Newsletter</h2>
          <span onClick={() => setModal(false)}>X</span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <p>Name*</p>
            <input
              placeholder='How can we contact you?'
              type='text'
              {...register('modal.name', {
                required: 'This field is required',
              })}
            />
          </label>
          <label>
            <p>E-mail*</p>
            <input
              placeholder='Enter your email address'
              type='text'
              {...register('modal.email', {
                required: 'This field is required',
              })}
            />
          </label>
          <label>
            <p>Phone*</p>
            <input
              placeholder='Your phone number'
              type='number'
              {...register('modal.phone', {
                required: 'This field is required',
              })}
            />
          </label>
          <input
            type='submit'
            value={'SUBSCRIBE'}
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
          <h2>NEWSLETTER</h2>
          <p>
            Subscribe to our newsletter and be the first one to know about our
            company’s highlights, new products and services as well as special
            offers.
          </p>
        </div>
        <button onClick={() => setModal(!modal)}>SUBSCRIBE</button>
      </div>
      {newsletterModal}
    </section>
  )
}
