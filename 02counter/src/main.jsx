import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './Test.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
    {/* <Greeting name="Alice" />
    <Greeting name="Bob" /> */}
  </StrictMode>,
)
