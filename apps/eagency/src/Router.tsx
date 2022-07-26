import { Route, Routes } from 'react-router-dom'
import { Services } from './pages/Services'

import { Home } from './pages/Home'
import React from 'react'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servico" element={<Services />} />
    </Routes>
  )
}