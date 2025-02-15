import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginpage from './pages/loginpage';
import Homepage from './pages/homepage';
import './App.css';
import 'leaflet/dist/leaflet.css';


function App() {
  return (
<Router>
  <Routes>
    <Route path="/" element={<Loginpage/>}/>
    <Route path="/home" element={<Homepage/>}/>
  </Routes>
</Router>
  );
}

export default App;
