import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './component/Sidebar/Sidebar'
import Home from './Pages/Home'
import About from './Pages/About'

const App = () => {
  return (
   
      <div className='flex'>
        
        {/* Sidebar */}
        <div className='w-60 h-screen sticky top-0'>
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className='flex-1 p-6'>
          
            <Home />
            <About />
          
        </div>

      </div>
   
  )
}

export default App
