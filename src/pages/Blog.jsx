//Import components
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getNews } from 'store/slices/news'

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
      <h2>BLOG NEWS</h2>
      <div className='container'>
        {news && news.lenght ? (
          news?.map(child => {
            return (
              <div
                className='item'
                key={child._id}
                onClick={() => navigate('/blog/' + child.title)}
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
          <p>Nothing found</p>
        )}
      </div>
    </section>
  )
}
