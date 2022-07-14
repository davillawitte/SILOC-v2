import React from "react";

import { GrConfigure } from "react-icons/gr";
import { FaTemperatureHigh } from "react-icons/fa";

import { useChamber } from "../../../../contexts/chamber-context";

import "./styles.css";
function TemperatureCard() {
  const { selectedChamber } = useChamber();

  return (
    <section className="manutation-card">
      <p className="card-title">TEMPERATURA</p>

      <div className="temp-container">
        <div className="actual-temp-container">
          <p className="atual-text">ATUAL</p>
          <p className="temp-text">{selectedChamber.temp.actual} ºC</p>
        </div>

        <div className="limit-temp-container">
          <p className="limit-temp-text">
            MAX
            <br></br>
            {selectedChamber.temp.max} ºC
          </p>

          <br></br>

          <p className="limit-temp-text">
            MIN
            <br></br>
            {selectedChamber.temp.min} ºC
          </p>
        </div>
      </div>

      <FaTemperatureHigh className="top-icon" size={"2rem"}></FaTemperatureHigh>
    </section>
  );
}

export default TemperatureCard;
