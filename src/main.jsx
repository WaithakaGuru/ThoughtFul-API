import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Thoughtful  from './components/Thoughtful'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Thoughtful/>
  </StrictMode>,
)
