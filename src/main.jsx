import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/styles.scss'
import { Squirrify } from './Squirrify.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Squirrify />
    </BrowserRouter>
  </StrictMode>,
)
