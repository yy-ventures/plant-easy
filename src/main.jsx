import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import ScrollToTop from './components/scrollToTop'

import { types, transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import './index.css'
import App from './App'

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 0,
  offset: '30px',
  type: types.SUCCESS,
  // you can also just use 'scale'
  transition: transitions.SCALE
}

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <ScrollToTop/>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
)
