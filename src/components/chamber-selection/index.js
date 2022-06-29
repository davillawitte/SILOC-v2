import React, { useCallback } from "react";
import ArrowButton from "./components/arrow-button";
import "./styles.css";

import { useChamber } from "../../contexts/chamber-context";

function ChamberSelection() {
  const { selectedChamber, setSelectedChamber, chambers } = useChamber();

  const arrowRightClick = () => {
    if (chambers.length == 0) return;

    const index = chambers.indexOf(selectedChamber);

    if (index + 1 < chambers.length) {
      setSelectedChamber(chambers[index + 1]);
    }
  };

  const arrowLeftClick = () => {
    if (chambers.length == 0) return;

    const index = chambers.indexOf(selectedChamber);

    if (index - 1 >= 0) {
      setSelectedChamber(chambers[index - 1]);
    }
  };

  return (
    <section className="chamber-selection">
      <h4 className="chamber-title">CAMARA FRIA SELECIONADA</h4>

      <div className="chamber-content">
        <ArrowButton onClick={arrowLeftClick}></ArrowButton>

        <h4 className="chamber-text">{selectedChamber?.name ?? "VAZIO"}</h4>

        <ArrowButton onClick={arrowRightClick} isLeft={false}></ArrowButton>
      </div>
    </section>
  );
}

export default ChamberSelection;
