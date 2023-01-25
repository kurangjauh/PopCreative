import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/LandingPage'
import Client from './pages/Clients/'

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/client" element={<Client/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router