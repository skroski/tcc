import { Route, Routes } from 'react-router-dom'
import { Services } from './pages/Services'
import { Clients} from './pages/Clients'
import Budgets from './pages/Budgets'

import { Home } from './pages/Home'
import React from 'react'


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/clients" element={<Clients/>} />
      <Route path="/budgets" element={<Budgets/>} />
    </Routes>
  )
}