import React from 'react'
import "./App.css"
import {BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Sucess from './pages/Sucess'
import NotFound from './pages/NotFound'
import { Toaster } from 'react-hot-toast'
const App = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/sucess' element={<Sucess/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Toaster/>
    </Router>
  )
}

export default App