import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useChamber } from "../../../../contexts/chamber-context";

import "./styles.css";

function OccupationCard() {
  const { selectedChamber } = useChamber();

  let freeCount = 0;
  let busyCount = 0;

  selectedChamber.freezers.map((value) => {
    if (value !== "") {
      busyCount++;
    } else {
      freeCount++;
    }

    return value;
  });

  const percentage = Math.floor(
    (busyCount * 100) / selectedChamber.freezers.length
  );

  return (
    <section className="occupation-card">
      <p className="card-title">Ocupação</p>

      <div className="card-content">
        <div className="card-texts">
          <p className="text">
            Livres <br /> {freeCount}
          </p>

          <br></br>

          <p className="text">
            Ocupadas <br /> {busyCount}
          </p>
        </div>

        <div className="graph">
          <CircularProgressbar
            styles={{
              trail: {
                stroke: "#adf9d1",
                strokeLinecap: "butt",
                transform: "rotate(0.25turn)",
                transformOrigin: "center center",
              },

              path: {
                stroke: `#008f2f`,
                strokeLinecap: "butt",
                transition: "stroke-dashoffset 0.5s ease 0s",
                transform: "rotate(0.25turn)",
                transformOrigin: "center center",
              },
            }}
            strokeWidth={4}
            value={percentage}
          />

          <div className="graph-text">
            <div className="percentage">{percentage}%</div>

            <div className="total-text">TOTAL</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OccupationCard;
