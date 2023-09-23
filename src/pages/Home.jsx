//Import components
import { useEffect } from 'react'
import Projects from './Projects'
import { Link } from 'react-scroll'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Newsletter from 'components/Newsletter'
import ContactForm from 'components/ContactForm'
import { getNews } from 'store/slices/news'
import { useTranslation } from 'react-i18next'
import { urlValidation } from '../helpers/regex'
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll'

//Import images
import scroll from 'images/scroll.svg'

//Import styles
import 'styles/home.scss'

export default function Home() {
  //Initialization variables
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()

  //Initialization state manager
  const news = useSelector(state => state.newsReducer.news)

  //Function for paste only three news
  useEffect(() => {
    dispatch(getNews(i18n.language))
  }, [i18n.language])

  return (
    <>
      <section className='home-about'>
        <div>
          <h1>{t('videoHome')}</h1>
          <button
            onClick={() => {
              navigate('/about')
            }}
          >
            {t('ReadMore')}
          </button>
        </div>
        <div className='scroll'>
          <Link
            to='projects'
            spy={true}
            smooth={true}
            duration={250}
          >
            <p>{t('ScrollDown')}</p>
            <img
              src={scroll}
              alt='scroll'
            />
          </Link>
        </div>
      </section>
      <Projects />
      <Newsletter />
      {news && news.length ? (
        <section className='home-news'>
          <h2>{t('BlogNews')}</h2>
          <div className='container'>
            {news.slice(0, 3).map(child => {
              return (
                <div
                  className='item'
                  key={child._id}
                  onClick={() => {
                    navigate('/blog/' + urlValidation(child.title))
                  }}
                >
                  <img
                    src={child.imagePath}
                    alt={child.title}
                  />
                  <span>
                    {new Date(child.createdAt)
                      .toLocaleDateString('en-US')
                      .replace(/\//g, '.')}
                  </span>
                  <h3>{child.title}</h3>
                  <p>{child.description}</p>
                </div>
              )
            })}
          </div>
          <button
            onClick={() => {
              navigate('/blog')
            }}
            className='readMore'
          >
            {t('ReadMore')}
          </button>
        </section>
      ) : null}
      <ContactForm />
    </>
  )
}
