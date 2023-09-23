//Import components
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { getProjects } from 'store/slices/projects'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

//Import images
import seminee from 'images/seminee.jpg'
import stonecenter from 'images/stonecenter.jpg'
import stonedecorum from 'images/stonedecorum.jpg'

export default function Projects() {
  //Initialization variables
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()

  //Initialization data from server
  const allProjects = useSelector(state => state.projectsReducer.projects)

  //Request for get all projects
  useEffect(() => {
    dispatch(getProjects(i18n.language))
  }, [i18n.language])

  return (
    <section
      className='home-projects'
      id='projects'
    >
      <h2>DIRECTIONS OF ACTIVITY</h2>
      <p className='description'>
        We are always up-to-date with current market trends, we offer a wide
        range of natural stone products and French fireplaces, capable of
        satisfying the highest demands.
      </p>
      <div className='container'>
        <div
          onClick={() =>
            window.open(
              'https://stonedecorum.com/ro/catalog/stone-center',
              '_blank'
            )
          }
        >
          <h3>STONECENTER</h3>
          <p>Read more</p>
          <img
            src={stonecenter}
            alt='stonecenter'
          />
        </div>
        <div
          onClick={() =>
            window.open(
              'https://stonedecorum.com/ro/catalog/home-decor',
              '_blank'
            )
          }
        >
          <h3>STONEDECORUM</h3>
          <p>Read more</p>
          <img
            src={stonedecorum}
            alt='stonedecorum'
          />
        </div>
        <div onClick={() => window.open('https://seminee.md/', '_blank')}>
          <h3>SEMINEE.MD</h3>
          <p>Read more</p>
          <img
            src={seminee}
            alt='seminee'
          />
        </div>
      </div>
      <h2>COMPLETED PROJECTS</h2>
      <p className='description'>
        Discover the power and nobility of natural stone in our products.
      </p>
      <div className='container'>
        {allProjects && allProjects.length ? (
          allProjects.map(project => (
            <div
              onClick={() => navigate(`/projects/${project.title}`)}
              key={project._id}
            >
              <h3>{project.title}</h3>
              <p>Read more</p>
              <img
                src={project.previewImagePath}
                alt={project.title}
              />
            </div>
          ))
        ) : (
          <p>Nothing found</p>
        )}
      </div>
    </section>
  )
}
