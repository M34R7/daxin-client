//Import components
import { useDispatch, useSelector } from 'react-redux'
import { getAbout } from 'store/slices/about'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

//Import styles
import 'styles/about.scss'

export default function About() {
  //Initialization variables
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()

  //Initialization data from server
  const about = useSelector(state => state.aboutReducer.terms)

  //Request for get contacts
  useEffect(() => {
    if (!about) {
      dispatch(getAbout(i18n.language))
    }
  }, [about, i18n.language])

  return (
    <section className='about'>
      <h2>About</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: about?.htmlStr,
        }}
      ></div>
    </section>
  )
}
