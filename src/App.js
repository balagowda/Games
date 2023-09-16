import React from 'react';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Home/Layout';
import Contact from './Components/Home/Contact';
import About from './Components/Home/About';
import Play from './Components/Playhome/Play'
import NotFound from './Components/Home/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout children={<Home/>}/>} />
      <Route path="/about" element={<Layout children={<About/>}/>} />
      <Route path="/contact" element={<Layout children={<Contact/>}/>} />
      <Route path="/:game" element={<Play/>} />
      <Route path="*" element={<Play children={<NotFound/>}/>}/>
    </Routes>
  )
}

export default App;
