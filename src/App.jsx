import React, { useState, useEffect } from "react";
import "./App.css";
import { FaStar, FaRegStar } from "react-icons/fa";

function App() {
  const numbers = Array.from({ length: 20 }, (_, i) => i + 1); // Números del 1 al 20
  const [facts, setFacts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("all");

  useEffect(() => {
    const fetchFacts = async () => {
      const response = await fetch(`http://numbersapi.com/${numbers.join(",")}?json`);
      const data = await response.json();
      const formatted = Object.entries(data).map(([number, fact]) => ({
        number: Number(number),
        fact
      }));
      setFacts(formatted);
    };

    fetchFacts();
  }, []);

  const toggleFavorite = (num) => {
    setFavorites((prev) =>
      prev.includes(num) ? prev.filter((n) => n !== num) : [...prev, num]
    );
  };

  const filterByTab = () => {
    let list = facts;

    switch (tab) {
      case "favorites":
        list = list.filter((item) => favorites.includes(item.number));
        break;
      case "search":
        list = list.filter((item) => item.number.toString().includes(search));
        break;
      case "even":
        list = list.filter((item) => item.number % 2 === 0);
        break;
      case "odd":
        list = list.filter((item) => item.number % 2 !== 0);
        break;
      case "top":
        list = facts.slice(0, 5);
        break;
      default:
        break;
    }

    return list;
  };

  const displayedFacts = filterByTab();

  return (
    <div className="container">
      {(tab === "search" || tab === "all") && (
        <input
          type="text"
          placeholder="Buscar número..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />
      )}

      <div>
        {displayedFacts.map((item) => (
          <div key={item.number} className="card">
            <div className="card-header">
              <strong>{item.number}</strong>
              <p>{item.fact}</p>
            </div>
            <button className="favorite-btn" onClick={() => toggleFavorite(item.number)}>
              {favorites.includes(item.number) ? (
                <FaStar color="gold" size={20} />
              ) : (
                <FaRegStar size={20} />
              )}
            </button>
          </div>
        ))}
      </div>

      <div className="bottom-menu">
        <button className={tab === "all" ? "tab-btn active" : "tab-btn"} onClick={() => setTab("all")}>Todos</button>
        <button className={tab === "favorites" ? "tab-btn active" : "tab-btn"} onClick={() => setTab("favorites")}>Favoritos</button>
        <button className={tab === "search" ? "tab-btn active" : "tab-btn"} onClick={() => setTab("search")}>Buscar</button>
        <button className={tab === "even" ? "tab-btn active" : "tab-btn"} onClick={() => setTab("even")}>Pares</button>
        <button className={tab === "odd" ? "tab-btn active" : "tab-btn"} onClick={() => setTab("odd")}>Impares</button>
        <button className={tab === "top" ? "tab-btn active" : "tab-btn"} onClick={() => setTab("top")}>Top 5</button>
      </div>
    </div>
  );
}

export default App;
