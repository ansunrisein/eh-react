import './index.css'
import '@eh/shared/styles/index.scss'
import 'rsuite/dist/rsuite.min.css'
import 'swiper/swiper-bundle.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import {App} from './app'
import {reportWebVitals} from './reportWebVitals'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
