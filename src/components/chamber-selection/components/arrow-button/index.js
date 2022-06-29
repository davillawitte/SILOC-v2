import React from "react";
import "./styles.css";

function ArrowButton({ isLeft = true, onClick = () => {} }) {
  return (
    <button className="arrow-button" onClick={onClick}>
      <p className="arrow-button-text">{isLeft ? "🡠" : "🡢"}</p>
    </button>
  );
}

export default ArrowButton;
