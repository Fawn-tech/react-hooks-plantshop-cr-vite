import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

const PLANTS_URL = "http://localhost:6001/plants";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [soldOutIds, setSoldOutIds] = useState(() => new Set());

  useEffect(() => {
    let isMounted = true;

    async function fetchPlants() {
      const res = await fetch(PLANTS_URL);
      const data = await res.json();
      if (!isMounted) return;
      setPlants(data);
    }

    fetchPlants();

    return () => {
      isMounted = false;
    };
  }, []);

  function toggleSoldOut(id) {
    setSoldOutIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div className="app">
      <Header />
      <PlantPage
        plants={plants}
        setPlants={setPlants}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        soldOutIds={soldOutIds}
        toggleSoldOut={toggleSoldOut}
      />
    </div>
  );
}

export default App;

