
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Comparateur from './pages/Comparateur';
import Etape3 from './pages/Etape3';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comparateur" element={<Comparateur />} />
        <Route path="/etape3" element={<Etape3 />} />
      </Routes>
    </Router>
  );
}

export default App;
