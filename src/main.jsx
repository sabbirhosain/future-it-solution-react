import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AppointmentContext from './Context/AppointmentContext.jsx'
import AuthContext from './Context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppointmentContext>
      <AuthContext>
        <App />
      </AuthContext>
    </AppointmentContext>
  </BrowserRouter>
)
