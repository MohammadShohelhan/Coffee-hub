import { useLoaderData, useLocation } from "react-router-dom";
import Title from "../components/Title";
import { getItem } from "../Utilis/addLocal";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const Dashboard = () => {


  const location = useLocation();
  
  const {pathname} =location;
  console.log(location,pathname)
  const [coffee, setCoffee] = useState([]);
  const allData = useLoaderData();

  useEffect(() => {
    const getCoffee = getItem(); // Store result to avoid calling on every re-render
    const items = allData.filter((data) => getCoffee.includes(data.id));
    setCoffee(items);
  }, [allData]);

  return (
    <div>
      <Title
        heading="Welcome to Dashboard"
        para="Manage coffees that you have previously added as favorite. You can view or remove them from here."
      />

      <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mx-auto">
        {coffee.length > 0 ? (
          coffee.map((item) => <Card key={item.id} coffee={item} pathname={pathname} ></Card>)
        ) : (
          <p>No favorite coffee items found.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
