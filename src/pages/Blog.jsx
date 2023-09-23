//Import components
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getNews } from 'store/slices/news'

import { urlValidation } from '../helpers/regex'

//Import styles
import 'styles/news.scss'

export default function Blog() {
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
    <section className='home-news'>
      <h2>{t('BlogNews')}</h2>
      <div className='container'>
        {news && news.length > 0 ? (
          news.map(child => {
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
          })
        ) : (
          <p>{t('NothingFound')}</p>
        )}
      </div>
    </section>
  )
}
