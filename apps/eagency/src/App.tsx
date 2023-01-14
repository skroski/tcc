import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { UiHeader } from '@tcc/ui-header';
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Clients } from "./pages/Clients";
export function App() {
  return (
    
    <div className="App">
      <UiHeader/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </div>
  );
}