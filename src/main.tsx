import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import PracticeCSS from './PracticeCSS'

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <PracticeCSS />
  </React.StrictMode>,
)
