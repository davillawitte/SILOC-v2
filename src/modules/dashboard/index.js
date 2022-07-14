import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";

import ChamberSelection from "../../components/chamber-selection";

import "./styles.css";
import OccupationCard from "./components/occupation-card";
import ManutationCard from "./components/manutation-card";
import ChartCard from "./components/chart-card";
import TemperatureCard from "./components/temperature-card";

function Dashboard() {
  return (
    <section className="dashboard-root">
      <Header></Header>
      <ChamberSelection></ChamberSelection>

      <section className="cards-container">
        <OccupationCard></OccupationCard>

        <TemperatureCard></TemperatureCard>

        <ManutationCard></ManutationCard>
      </section>

      <section className="chart">
        <ChartCard></ChartCard>
      </section>

      <Footer></Footer>
    </section>
  );
}

export default Dashboard;
