import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import Wallet from './components/Wallet';


function App() {
  return (
    <Router basename="/glimpass-shop">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/wallet" element={<Wallet />} />

      </Routes>
    </Router>
    
    
  );
}

export default App;
