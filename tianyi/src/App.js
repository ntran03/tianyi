import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import Dancers from './components/dancers';
import ContactUs from './components/contact';
import Costumes from './components/costume_sale';
import Footer from './components/footer';
import Showcase from './components/showcase';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dancers" element={<Dancers />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/costume_sale" element={<Costumes />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      <Footer />
      
    </Router>
  );
}

export default App;
