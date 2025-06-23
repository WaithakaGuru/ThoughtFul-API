import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Thoughtful  from './Thoughtful.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Thoughtful/>
  </StrictMode>,
)
