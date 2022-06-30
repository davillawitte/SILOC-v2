import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

function Header({ onSearchInput }) {
  return (
    <header className="cabecalho">
      <h1>SILOC</h1>
      <p>
        Sistema Integrado de
        <br />
        Localização Cadavérica
      </p>

      <Link to="/SILOC-v2">
        <h1 className="logo"> SILOC </h1>
      </Link>

      {onSearchInput && (
        <div className="search-box">
          <input
            className="search-txt"
            type="text"
            name=""
            onChange={(e) => {
              onSearchInput(e.target.value);
            }}
            placeholder="Pesquisar cadáver pelo NIC"
          />
          <a className="search-btn" href="#"></a>
        </div>
      )}
    </header>
  );
}

export default Header;
