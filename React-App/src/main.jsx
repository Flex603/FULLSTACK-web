import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter as Router} from 'react-router-dom'
import ThemeProvider from './component/context/ThemeContext.jsx'
import { UserProvider } from './UserContex.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <Router>
    <UserProvider>
      <App />
    </UserProvider>
    </Router>
    </ThemeProvider>
  </StrictMode>,
);
