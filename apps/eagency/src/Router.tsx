import { Route, Routes } from 'react-router-dom'
import { Services } from './pages/Services'
import { Clients} from './pages/Clients'

import { Home } from './pages/Home'
import React from 'react'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servico" element={<Services />} />
      <Route path="/clientes" element={<Clients/>} />
    </Routes>
  )
}