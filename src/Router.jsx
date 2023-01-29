import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/LandingPage'
import Client from './pages/Clients/'
import Project from './pages/Project'

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/client" element={<Client/>} />
            <Route path="/project" element={<Project/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router