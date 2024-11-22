import React from 'react'
import ReactDom from 'react-dom/client'
import Home from './pages/Home'
import './index.css'


ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
