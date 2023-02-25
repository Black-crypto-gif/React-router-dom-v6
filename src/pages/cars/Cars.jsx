import { useLoaderData, Link } from "react-router-dom";

export default function Cars() {
  const cars = useLoaderData();
  return (
    <div className="cars">
      {cars.map((cars) => (
        <Link to={cars.id.toString()} key={cars.id}>
          <h5>{cars.name}</h5>
          <h5>{cars.year}</h5>
        </Link>
      ))}
    </div>
  );
}

/// loader function

export const CarsLoader = async () => {
  const res = await fetch("http://localhost:4000/cars");
  if(!res.ok){
    throw Error('Could not find the cars');
  }
  return res.json();
};
