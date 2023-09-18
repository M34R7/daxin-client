import { configureStore } from '@reduxjs/toolkit'
import about from './slices/about'
import terms from './slices/terms'
import contacts from './slices/contacts'
import news from './slices/news'
import projects from './slices/projects'
import newsletter from './slices/newsletter'

export const store = configureStore({
  reducer: {
    aboutReducer: about,
    termsReducer: terms,
    contactsReducer: contacts,
    newsReducer: news,
    projectsReducer: projects,
    newsletterReducer: newsletter,
  },
})
