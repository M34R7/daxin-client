//Import components
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Slider from 'components/Slider'
import { getProjects } from '../store/slices/projects'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

//Import styles
import 'styles/singleProject.scss'

export default function SingleProject() {
  //Initialization variables
  const { projectId } = useParams()
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()

  //Initialization data from server
  const allProjects = useSelector(state => state.projectsReducer.projects)

  //Initialization state manager
  const [currentProject, setCurrentProject] = useState(null)

  //Function for find current project
  useEffect(() => {
    if (allProjects) {
      setCurrentProject(
        allProjects.find(project => project.title === projectId)
      )
    }
  }, [allProjects])

  //Request for get all projects
  useEffect(() => {
    dispatch(getProjects(i18n.language))
  }, [i18n.language])

  return (
    <section className='single-project'>
      <div className='title'>{currentProject?.title}</div>
      <div className='description'>
        <div
          dangerouslySetInnerHTML={{
            __html: currentProject?.htmlStrSection1,
          }}
        ></div>
        {currentProject?.imagePathsSection1 &&
        currentProject?.imagePathsSection1.length ? (
          <div className='slider'>
            <Slider items={currentProject?.imagePathsSection1} />
          </div>
        ) : null}
        <div
          dangerouslySetInnerHTML={{
            __html: currentProject?.htmlStrSection2,
          }}
        ></div>
        {currentProject?.imagePathsSection2 &&
        currentProject?.imagePathsSection2.length &&
        currentProject.imagePathsSection2[0] !== '' ? (
          <div className='slider'>
            <Slider items={currentProject?.imagePathsSection2} />
          </div>
        ) : null}
      </div>
    </section>
  )
}
