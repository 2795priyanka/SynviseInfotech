import React from 'react'
import LandingPage from './pages/LandingPage'
import './assets/css/style.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
   
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<LandingPage/>} ></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
