import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants = [], soldOutIds, toggleSoldOut, searchQuery }) {
  const normalizedQuery = (searchQuery || "").toLowerCase();

  const visiblePlants = normalizedQuery
    ? plants.filter((plant) => plant.name.toLowerCase().includes(normalizedQuery))
    : plants;

  return (
    <ul className="cards">
      {visiblePlants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          soldOut={soldOutIds.has(plant.id)}
          toggleSoldOut={() => toggleSoldOut(plant.id)}
        />
      ))}
    </ul>
  );
}

export default PlantList;



