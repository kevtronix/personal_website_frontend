import HomePage from './HomePage';
import About from './About';
import Projects from './Projects';
import Navigation from './Navigation';
import './App.css';

import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App"> 
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes> 
    </div>
  );
}

export default App;
