//Import components
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Router from './Router'
import './i18n'

//Import pages
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Contacts from './pages/Contacts'
import Error from './pages/Error'
import Terms from './pages/Terms'
import SingleProject from './pages/SingleProject'
import SingleNews from './pages/SingleNews'

export default function App() {
  const routing = createBrowserRouter([
    {
      path: '/',
      element: <Router />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'projects',
          element: <Projects />,
        },
        {
          path: 'projects/:projectId',
          element: <SingleProject />,
        },
        {
          path: 'blog',
          element: <Blog />,
          children: [
            {
              path: 'blog/:blogId',
              element: <SingleNews />,
            },
          ],
        },
        {
          path: 'contacts',
          element: <Contacts />,
        },
        {
          path: 'terms',
          element: <Terms />,
        },
        {
          path: '*',
          element: <Error />,
        },
      ],
    },
  ])

  return <RouterProvider router={routing} />
}
