import React from "react";

import { FaCalendarCheck } from "react-icons/fa";
import { GrConfigure } from "react-icons/gr";
import { useChamber } from "../../../../contexts/chamber-context";

import "./styles.css";
function ManutationCard() {
  const { selectedChamber } = useChamber();

  return (
    <section className="manutation-card">
      <p className="card-title">
        PROXIMA
        <br />
        MANUTENÇÃO
      </p>

      <br></br>
      <p className="date-text">{selectedChamber.nextMaintanceDate}</p>

      <FaCalendarCheck size={"3rem"}></FaCalendarCheck>
      <GrConfigure className="top-icon" size={"2rem"}></GrConfigure>
    </section>
  );
}

export default ManutationCard;
