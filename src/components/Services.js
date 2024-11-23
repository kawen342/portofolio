import React from 'react';
import './Services.css'; // Pastikan Anda mengimpor file CSS yang benar

function Services() {
  return (
    <div className="services-container">
      <h2 className="services-title">My Services</h2>
      <div className="services-text-container">
        <ul className="services-list">
          <li>Help find inspiration</li>
          <li>Found wide frequency</li>
          <li>Help find job vacancies</li>
        </ul>
      </div>

      {/* Section untuk ikon sosial media */}
      <div className="social-icons">
        <a href="tel:+123456789" className="social-icon" title="Call us">
          <i className="fas fa-phone-alt"></i>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          title="Instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          title="Facebook"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
      </div>
    </div>
  );
}

export default Services;
