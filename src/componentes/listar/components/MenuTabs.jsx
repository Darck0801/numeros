// src/components/MenuTabs.jsx
import React from "react";

function MenuTabs({ tab, setTab }) {
  const tabs = [
    { key: "all", label: "Todos" },
    { key: "favorites", label: "Favoritos" },
    { key: "search", label: "Buscar" },
    { key: "filter", label: "Filtro" },
    { key: "top", label: "Top" },
    { key: "new", label: "Más nuevos" },
  ];

  return (
    <div className="bottom-menu">
      {tabs.map(({ key, label }) => (
        <button
          key={key}
          className={tab === key ? "tab-btn active" : "tab-btn"}
          onClick={() => setTab(key)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default MenuTabs;
