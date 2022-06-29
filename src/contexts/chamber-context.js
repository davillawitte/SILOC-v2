import React, { useCallback, useContext, useState } from "react";

const CHAMBERS = [
  {
    id: 0,
    name: "NECROTÉRIO",
    freezers: Array(30).fill(""),
  },
  {
    id: 1,
    name: "Exemplo",
    freezers: Array(15).fill(""),
  },
];

export const ChamberContext = React.createContext({
  chambers: CHAMBERS,
  selectedChamber: CHAMBERS[0],
  setSelectedChamber: () => {},

  updateChamber: (id, chamber) => {},
});

export function ChamberProvider({ children }) {
  const [chambers, setChambers] = useState(CHAMBERS);

  const [selectedChamber, setSelectedChamber] = useState(CHAMBERS[0]);

  const updateChamber = useCallback(
    (id, updatedChamb) => {
      const newChambers = chambers.map((value) => {
        if (value.id === id) {
          return updatedChamb;
        }

        return value;
      });

      setChambers(newChambers);

      const chamber = newChambers.find((v) => v.id === selectedChamber.id);
      setSelectedChamber(chamber);
    },
    [chambers, selectedChamber]
  );

  return (
    <ChamberContext.Provider
      value={{ chambers, selectedChamber, setSelectedChamber, updateChamber }}
    >
      {children}
    </ChamberContext.Provider>
  );
}

export function useChamber() {
  const chamber = useContext(ChamberContext);

  return chamber;
}
