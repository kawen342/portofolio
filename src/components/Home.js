import React from 'react';
import "./Home.css";
import mountainImage from '../assets/img/my.png'; // Impor gambar lokal

function Home() {
  return (
    <div className="text-center">
      {/* Efek mengetik */}
      <h1 className="typing-effect">Welcome to My Portfolio</h1>
      
      {/* Fade-in untuk paragraf */}
      <p className="fade-in">A place where I struggle.</p>
      
      {/* Fade-in untuk gambar */}

      {/* Tambahkan foto baru */}
      <img
        src={mountainImage} // Gambar lokal
        alt="Beautiful Mountain"
        className="img-fluid fade-in mt-4"
        style={{ borderRadius: '15px', maxWidth: '100%' }} // Gaya opsional
      />
    </div>
  );
}

export default Home;
