//Import components
import { useEffect, useState } from 'react'
import Projects from './Projects'
import { Link } from 'react-scroll'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Newsletter from 'components/Newsletter'
import ContactForm from 'components/ContactForm'
import { getNews } from 'store/slices/news'
import { useTranslation } from 'react-i18next'

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
  const [allNews, setAllNews] = useState(null)
  const news = useSelector(state => state.newsReducer.news)

  //Function for paste only three news
  useEffect(() => {
    if (news) {
      setAllNews(news.slice(0, 2))
    } else {
      dispatch(getNews(i18n.language))
    }
  }, [news, i18n.language])

  return (
    <>
      <section className='home-about'>
        <div>
          <h1>
            We create original products from natural stone in which innovation
            and authenticity blend together into one ecological concept.
          </h1>
          <button onClick={() => navigate('/about')}>Read more</button>
        </div>
        <div>
          <Link
            to='projects'
            spy={true}
            smooth={true}
            duration={250}
          >
            <p>SCROLL DOWN</p>
            <img
              src={scroll}
              alt='scroll'
            />
          </Link>
        </div>
      </section>
      <Projects />
      <Newsletter />
      {allNews ? (
        <section className='home-news'>
          <h2>BLOG NEWS</h2>
          <div className='container'>
            {allNews.map(child => {
              return (
                <div
                  className='item'
                  key={child._id}
                  onClick={() => navigate('/news/' + child.id)}
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
          <button onClick={() => navigate('/news')}>Read more</button>
        </section>
      ) : null}
      <ContactForm />
    </>
  )
}
