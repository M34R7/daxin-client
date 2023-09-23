//Import components
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { store } from 'store/store'
import { Provider } from 'react-redux'

//Import styles
import 'styles/reset.scss'

//Render app in HTML
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
