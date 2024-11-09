import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";


const CoffeeCards = () => {

  const navigate =useNavigate()
  const [select, setSelect] = useState([]);
  const { obg } = useParams();

  const allCoffees = useLoaderData();
  

  useEffect(() => {
    if(obg){
      const filtered = [...allCoffees].filter((coffee)=>coffee.category === obg);
      console.log(obg)
      setSelect(filtered);
    }else{
      setSelect(allCoffees.slice(0,6));
    }
   

    
  }, [allCoffees,obg]);

  // console.log(select);

  return (
    <div>
     
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {select.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>
      <div className="text-center ">
        <button onClick={()=>navigate('/coffee')} className="w-32 my-5 btn btn-warning">See all</button>
      </div>
    </div>
  );
};

export default CoffeeCards;
