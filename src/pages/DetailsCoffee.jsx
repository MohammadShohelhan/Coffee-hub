import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "../components/Card";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveLocal } from "../Utilis/addLocal";


const DetailsCoffee = () => {
  const { userId } = useParams();
  const alldata = useLoaderData();
  // console.log(userId, alldata);

  const [allCoffee, setAllCoffee] = useState([]);

  useEffect(() => {
    const coffee = [...alldata].find((data) => data.id === parseInt(userId));
    setAllCoffee(coffee);
  }, [alldata, userId]);


  const handleFav = (id)=>{
    saveLocal(id)
    // console.log(id)
   
  }
  return (
    <div>
      
       <Card coffee={allCoffee}></Card>
       <div className="text-center my-10">
        <button onClick={()=>handleFav(allCoffee.id)} className="btn btn-warning">Add Favourite</button>
       
       </div>
       <ToastContainer />
    </div>
  );
};

export default DetailsCoffee;
