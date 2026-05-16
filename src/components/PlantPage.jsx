import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({
  plants,
  setPlants,
  searchQuery,
  setSearchQuery,
  soldOutIds,
  toggleSoldOut,
}) {
  return (
    <main>
      <NewPlantForm setPlants={setPlants} />
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <PlantList
        plants={plants}
        soldOutIds={soldOutIds}
        toggleSoldOut={toggleSoldOut}
        searchQuery={searchQuery}
      />
    </main>
  );
}



export default PlantPage;
