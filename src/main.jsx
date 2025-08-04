import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EngagementAnniversary from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EngagementAnniversary />
  </StrictMode>,
)
