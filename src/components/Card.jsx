import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const Card = ({ coffee,pathname }) => {
  // const [button,setbutton] =useState(false);
  // console.log(pathname)
  const { uerId } = useParams();

  const { image, name, category, type, origin, rating, popularity, id } =
    coffee;
//  const handleDelete =()=>{
//     if(pathname === "/dashboard"){
//       setbutton(true)
//     }
//  }
  return (
    <Link to={`/detailscoffee/${id}`}>
      <div className="card card-compact bg-base-100 w-96 shadow-xl mx-auto">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2>NamE:{name} </h2>
          <p>Category:{category}</p>
          <p>Type:{type}</p>
          <p>Origin:{origin}</p>
          <p>Rating:{rating}</p>

          <p>Popular:{popularity}</p>
          {/* <p>{button ? 'hellooo' : ''}</p> */}
        </div>
      </div>
    </Link>
  );
};

export default Card;
