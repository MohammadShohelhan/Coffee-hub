import  {  useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import { Helmet } from "react-helmet-async";

const CoffeeAllcards = () => {
  const data = useLoaderData();
  const [all, setAll] = useState(data)
  

  useEffect(()=>{
    
  },[])

const handleSort = (message)=>{
  if(message === "dsc"){
       const sorted =[...all].sort((a,b)=>a.popularity - b.popularity)
 setAll(sorted)
 console.log(sorted)
     
  }
  if(message === 'asc'){
   const sorted = [...all].sort((a,b)=>b.rating - a.rating)
 setAll(sorted)
 console.log(sorted)

  }
}


  return (
    <div>
       <Helmet>
        <title>Coffes</title>
      </Helmet>
      <div className=" flex justify-between">
        <h2 className="text-3xl"> Sort Coffees by Popularity & Rating </h2>
        <div className="space-x-6">
          <button onClick={()=>handleSort('dsc')} className="btn btn-warning">Sort By Popularity (DSc)</button>
          <button onClick={()=>handleSort('asc')}  className="btn btn-warning">Sort By Rating (ASc)</button>
        </div>
      </div>

      <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {all.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>
    </div>
  );
};

export default CoffeeAllcards;
