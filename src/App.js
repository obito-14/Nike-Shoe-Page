import React from 'react'
import "./App.css"
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'

const App = () => {
  return (
    <div>
      <div className='navbar'>
      <Navbar/>
      </div>
     <div>
     <Hero/>
     </div>
    </div>
  )
}

export default App
