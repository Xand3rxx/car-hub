import React from "react";
import CustomFilter from "./CustomFilter";
import CarsList from "./cars/CarsList";
import SearchBar from "./search/SearchBar";
import { CarProps } from "@/types";

interface CarListProps {
  cars: CarProps;
}

const CatalogueHeader = ({cars}: CarListProps) => {
  return (
    <div className="mt-12 padding-x padding-y max-width" id="discover">
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">Catalogue</h1>
        <p className="italic">Explore the cars you might like...</p>
      </div>

      <div className="home__filters">
        <SearchBar />

        <div className="home__filter-container">
          <CustomFilter title="fuel" />
          <CustomFilter title="year" />
        </div>
      </div>

      <CarsList cars={cars} />
    </div>
  );
};

export default CatalogueHeader;
