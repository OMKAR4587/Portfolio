import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='Portfolio/' element={<App/>}/>
      <Route path='Portfolio/about' element={<About/>}/>
       <Route
        path="*"
        element={<h1>Page Not Found</h1>}
      />
    </Routes>
  </BrowserRouter>
)
