import React, { useCallback, useContext, useState } from "react";

const CHAMBERS = [
  {
    id: 0,
    name: "NECROTÉRIO",
    freezers: Array(30).fill(""),
    log: [0, 2, 5, 1, 0, 4, 8, 0, 1, 9, 0, 2],
    nextMaintanceDate: "21/04/2023",
    temp: { actual: 16, max: 22, min: 12 },
  },
  {
    id: 1,
    name: "Pátio",
    freezers: Array(15).fill(""),
    log: [2, 9, 8, 0, 10, 6, 2, 10, 1, 3, 3, 6],
    nextMaintanceDate: "25/12/2022",
    temp: { actual: 14, max: 21, min: 9 },
  },
  {
    id: 2,
    name: "Corredor",
    freezers: Array(20).fill(""),
    log: [0, 3, 2, 8, 5, 6, 1, 4, 4, 6, 7, 6],
    nextMaintanceDate: "25/12/2022",
    temp: { actual: 17, max: 20, min: 10 },
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
