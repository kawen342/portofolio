import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CV from './components/CV'; // Import komponen CV

function App() {
  return (
    <Router>
      <div className="app-container" style={{ position: 'relative', minHeight: '100vh' }}>
        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          id="background-video"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
          }}
        >
          {/* Path video diperbarui */}
          <source src="/Desain tanpa judul.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Main content */}
        <Navbar />
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cv" element={<CV />} /> {/* Rute CV ditambahkan */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
