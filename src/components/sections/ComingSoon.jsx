// src/components/sections/ComingSoon.jsx
import React from 'react';
import Image from 'next/image';
import './ComingSoon.css'; // Import the component's specific CSS

export default function ComingSoon() {
  return (
    <div className="coming-soon-container">
      {/* Top Left Logo Area */}
      <div className="header-logo-area">
        <Image
          src="/adare_collection_logo.png" // Path to your logo in the public directory
          alt="Adare Collection Logo"
          width={150} // Adjust width as needed for a smaller logo in the corner
          height={50} // Adjust height to maintain aspect ratio
          priority
          className="adare-header-logo-image"
        />
      </div>

      {/* Main Content Block - Left Aligned */}
      <div className="main-content-block">
        <h1 className="coming-soon-headline">Coming Soon</h1>

        {/* Updated Description Text with Contact Info */}
        <p className="description-text">
          An exclusive portfolio of exceptional properties is being carefully assembled.
          Each residence is selected for its unique character, impeccable design, and unparalleled location.
          <br /><br /> {/* Line breaks for spacing */}
          <strong>For inquiries, please contact:</strong>
        </p>

        {/* New: Styled Contact Info Box */}
        <div className="contact-info-box">
          <strong>Joe Mulcahy</strong><br />
          <a href="mailto:info@theadarecollection.ie" className="contact-link">info@theadarecollection.ie</a><br />
          <a href="tel:+353866681930" className="contact-link">+353 86 668 1930</a>
        </div>

      </div>

      {/* The right side of the screen can be implicitly empty or used for further design if needed */}
      <div className="gradient-right-half"></div> {/* This will create the visual split */}
    </div>
  );
}