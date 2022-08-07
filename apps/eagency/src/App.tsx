import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { UiHeader } from '@tcc/ui-header';
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";

export function App() {
  return (
    <div className="App">
      <UiHeader/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servico" element={<Services />} />
      </Routes>
    </div>
  );
}