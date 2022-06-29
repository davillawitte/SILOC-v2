import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

import FreezerButton from "./components/freezer_button";
import BottomSheet from "./components/bottom_sheet";
import RegistrationNickPopup from "./components/registration_nick_popup";
import ChamberSelection from "../../components/chamber-selection";
import { useChamber } from "../../contexts/chamber-context";

function Home() {
  const { selectedChamber, updateChamber } = useChamber();
  const [registrationVisible, setRegistrationVisible] = useState(false);
  const [search, setSearch] = useState("");

  const selectedIndex = useRef(0);

  const [freezersBySearch, setFreezersBySearch] = useState();

  const onAddClick = () => {
    setRegistrationVisible(true);
  };

  const onConfirmRegis = (nick) => {
    const newFreezers = [...selectedChamber.freezers];

    newFreezers[selectedIndex.current] = nick;

    updateChamber(selectedChamber.id, {
      ...selectedChamber,
      freezers: newFreezers,
    });

    setRegistrationVisible(false);
  };

  const onRemoveCorpse = () => {
    const newFreezers = [...selectedChamber.freezers];

    newFreezers[selectedIndex.current] = "";

    updateChamber(selectedChamber.id, {
      ...selectedChamber,
      freezers: newFreezers,
    });

    setRegistrationVisible(false);
  };

  const onCancelRegis = () => {
    setRegistrationVisible(false);
  };

  const onFreezerClick = (index) => {
    selectedIndex.current = index;
  };

  const onSearchInput = (text) => {
    setSearch(text);
  };

  useEffect(() => {
    const renderFreezers = selectedChamber.freezers.map((i, index) => (
      <FreezerButton
        nick={selectedChamber.freezers[index]}
        index={index}
        onClick={onFreezerClick}
      ></FreezerButton>
    ));

    setFreezersBySearch(
      renderFreezers.filter((e, index) => {
        if (search === "") return true;

        return selectedChamber.freezers[index].includes(search);
      })
    );
  }, [search, selectedChamber]);

  return (
    <>
      <Header onSearchInput={onSearchInput}></Header>

      <ChamberSelection></ChamberSelection>

      <div className="freezers">{freezersBySearch}</div>
      <BottomSheet
        onRemoveClick={onRemoveCorpse}
        onAddClick={onAddClick}
      ></BottomSheet>
      <Footer></Footer>
      {registrationVisible && (
        <RegistrationNickPopup
          onConfirm={onConfirmRegis}
          onCancel={onCancelRegis}
        ></RegistrationNickPopup>
      )}
    </>
  );
}

export default Home;
