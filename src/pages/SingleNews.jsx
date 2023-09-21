//Import components
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getNews } from 'store/slices/news'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

//Import styles
import 'styles/singleProject.scss'

export default function SingleNews() {
  //Initialization variables
  const { blogId } = useParams()
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()

  //Initialization state manager
  const [currentProject, setCurrentProject] = useState(null)

  //Initialization data from server
  const allNews = useSelector(state => state.newsReducer.news)

  //Request for get all news
  useEffect(() => {
    dispatch(getNews(i18n.language))
  }, [i18n.language])

  //Function for find current project
  useEffect(() => {
    if (allNews) {
      setCurrentProject(allNews.find(project => project.title === blogId))
    }
  }, [blogId, allNews])

  return (
    <section className='single-project'>
      <div className='title'>{currentProject?.title}</div>
      <div className='description'>
        <div
          dangerouslySetInnerHTML={{
            __html: currentProject?.htmlStr,
          }}
        ></div>
      </div>
    </section>
  )
}
