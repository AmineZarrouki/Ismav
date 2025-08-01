import './assets/css/main.css';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Accueil from './Accueil.jsx';
import 'swiper/swiper-bundle.css';
import 'glightbox/dist/css/glightbox.css';



function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;