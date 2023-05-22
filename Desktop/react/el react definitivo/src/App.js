import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Weather from './routes/Weather';
import Gifs from './routes/Gifs';
import Planets from './routes/Planets';
import Contact from './routes/Contact';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/weather' element={<Weather/>} />
        <Route path='/gifs' element={<Gifs/>} />
        <Route path='/planets' element={<Planets/>} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}


export default App;
