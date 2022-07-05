import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";

import ChamberSelection from "../../components/chamber-selection";

import "./styles.css";
import OccupationCard from "./components/occupation-card";

function Dashboard() {
  return (
    <section className="dashboard-root">
      <Header></Header>
      <ChamberSelection></ChamberSelection>

      <section className="cards-container">
        <OccupationCard></OccupationCard>
      </section>
      <Footer></Footer>
    </section>
  );
}

export default Dashboard;
