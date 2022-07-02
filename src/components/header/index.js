import React from "react";
import { Link, useHref, useLocation } from "react-router-dom";

import "./index.css";

function Header({ onSearchInput }) {
  const { pathname } = useLocation();

  return (
    <header className="siloc-header">
      <Link to="/SILOC-v2">
        <h1 className="logo"> SILOC </h1>
      </Link>

      <div className="siloc-title">
        <h1>SILOC</h1>
        <p>
          Sistema Integrado de
          <br />
          Localização Cadavérica
        </p>
      </div>

      <nav className="siloc-nav">
        <Link to="/SILOC-v2">
          <button className="nav-button">início</button>
        </Link>

        <div className="nav-space"></div>

        {pathname !== "/dashboard" && (
          <Link to="/dashboard">
            <button className="nav-button">dashboard</button>
          </Link>
        )}

        <div className="nav-space"></div>

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
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
