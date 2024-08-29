// src/letter/LetterPage.js
import React from "react";
import './LetterPage.css';

function LetterPage({ title, message, imageSrc, recipient }) {
  return (
    <div className="letter-container">
      <div className="letter-box">
        <img src={imageSrc} alt={`${recipient}'s profile`} className="letter-image" />
        <div className="letter-text">
          <h2>{title}</h2>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default LetterPage;
