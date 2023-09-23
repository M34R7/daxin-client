//Import components
import { Outlet } from 'react-router-dom'
import Footer from 'components/Footer'
import Header from './components/Header'
import ScrollToTop from './helpers/ScrollToTop'

export default function Router() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <ScrollToTop />
      </main>
      <Footer />
    </>
  )
}
