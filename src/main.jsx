import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/Portfolio-Alana-Ribeiro">
    <App />
  </BrowserRouter>,
)
