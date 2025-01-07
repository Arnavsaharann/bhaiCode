import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SheetDetail from "./components/SheetDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sheet/:id" element={<SheetDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
