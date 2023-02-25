import { useLoaderData, useParams } from "react-router-dom";

function CarsDeta() {
  const { id } = useParams();
  const carsId = useLoaderData();
  return (
    <div className="cars-D">
       <div className="card">
         <h1>{carsId.name}</h1>
         <img src={carsId.photo_url} alt="cars image" />
         <div className="card-body">
           <p>{carsId.description}</p>
         </div>
       </div>
     </div>
     

  );
}

// loader function :

export const carsDetaLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:4000/cars/" + id);

  if(!res.ok){
    throw Error('Could not find this cars');
  }
  return res.json();
};

export default CarsDeta;
