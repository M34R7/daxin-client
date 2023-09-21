//Import components
import Icon from './Icon'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, NavLink, useNavigate } from 'react-router-dom'

//Import styles
import 'styles/header.scss'

//Import images
import logo from 'images/logo.svg'
import { BsPencil, BsBriefcase } from 'react-icons/bs'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { LiaPhoneVolumeSolid } from 'react-icons/lia'

export default function Header() {
  //Initialization variables
  const { t, i18n } = useTranslation()
  const changeLanguage = language => {
    i18n.changeLanguage(language)
  }
  const navigate = useNavigate()

  //Initialization state manager
  const [languageModal, setLanguageModal] = useState(false)
  const [subMenu, setSubMenu] = useState(false)

  //Initialization language modal
  const modalLanguage = languageModal ? (
    <div className='language-modal'>
      <button
        onClick={() => {
          changeLanguage('ro')
          setLanguageModal(false)
          navigate('/')
        }}
      >
        Ro
      </button>
      <button
        onClick={() => {
          changeLanguage('ru')
          setLanguageModal(false)
          navigate('/')
        }}
      >
        Ру
      </button>
      <button
        onClick={() => {
          changeLanguage('en')
          setLanguageModal(false)
          navigate('/')
        }}
      >
        En
      </button>
    </div>
  ) : null

  return (
    <header>
      <nav className='pc'>
        <Link
          to='/'
          className='logo'
        >
          <img
            src={logo}
            alt='logo'
          />
        </Link>
        <NavLink to='/about'>{t('About')}</NavLink>
        <NavLink to='/projects'>{t('Projects')}</NavLink>
        <NavLink to='/blog'>{t('Blog')}</NavLink>
        <NavLink to='/contacts'>{t('Contacts')}</NavLink>
        <button
          onClick={() => setLanguageModal(!languageModal)}
          className='language-button'
        >
          {i18n.language}
        </button>
        {modalLanguage}
      </nav>
      <nav className='mobile'>
        <Link to='/'>
          <img
            src={logo}
            alt='logo'
          />
        </Link>
        <div
          className={subMenu ? 'active burger' : 'burger'}
          onClick={() => setSubMenu(!subMenu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div
          className={subMenu ? 'active sub-menu' : 'sub-menu'}
          onClick={() => setSubMenu(false)}
        >
          <NavLink to='/about'>
            <Icon
              color='#343b49'
              size='25px'
              image={<BsPencil />}
            />
            {t('About')}
          </NavLink>
          <NavLink to='/projects'>
            <Icon
              color='#343b49'
              size='25px'
              image={<BsBriefcase />}
            />
            {t('Projects')}
          </NavLink>
          <NavLink to='/blog'>
            <Icon
              color='#343b49'
              size='25px'
              image={<HiOutlineDocumentText />}
            />
            {t('Blog')}
          </NavLink>
          <NavLink to='/contacts'>
            <Icon
              color='#343b49'
              size='25px'
              image={<LiaPhoneVolumeSolid />}
            />
            {t('Contacts')}
          </NavLink>
          <div className='language'>
            <button
              onClick={() => {
                changeLanguage('ro')
                setLanguageModal(false)
                navigate('/')
              }}
            >
              Ro
            </button>
            <button
              onClick={() => {
                changeLanguage('ru')
                setLanguageModal(false)
                navigate('/')
              }}
            >
              Ру
            </button>
            <button
              onClick={() => {
                changeLanguage('en')
                setLanguageModal(false)
                navigate('/')
              }}
            >
              En
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
