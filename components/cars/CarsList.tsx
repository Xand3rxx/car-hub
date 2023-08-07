import CarCard from "./CarCard";
import { CarProps } from "@/types";
// import { cars } from "@/constants";

interface CarListProps {
  cars: CarProps;
}

const CarsList = ({cars}: CarListProps) => {
  const isCarsEmpty = !Array.isArray(cars) || cars.length < 1 || !cars;
  
  return (
    <>
      {!isCarsEmpty ? (
        <section className="home__cars-wrapper">
          {cars?.map((car) => (
            <CarCard car={car} />
          ))}
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-xl font-bold text-black">
            Oops no results found. Please try again shortly.
          </h2>
          {/* <p>{cars?.message}</p> */}
        </div>
      )}
    </>
  );
};

export default CarsList;
