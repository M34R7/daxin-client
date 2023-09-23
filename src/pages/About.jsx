//Import components
import { useDispatch, useSelector } from 'react-redux'
import { getAbout } from 'store/slices/about'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

//Import styles
import 'styles/about.scss'

//Import video
import video from 'images/daxin.mp4'

export default function About() {
  //Initialization variables
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()

  //Initialization data from server
  const about = useSelector(state => state.aboutReducer.about)

  //Request for get contacts
  useEffect(() => {
    dispatch(getAbout(i18n.language))
  }, [about, i18n.language])

  return (
    <section className='about'>
      <h2>{t('About')}</h2>
      <div dangerouslySetInnerHTML={{ __html: about }}></div>
      <video
        controls
        autoPlay
        muted
      >
        <source
          src={video}
          type='video/mp4'
        />
      </video>
    </section>
  )
}
