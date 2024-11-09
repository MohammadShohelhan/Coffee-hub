import { Outlet, useLoaderData } from "react-router-dom";
import Hero from "../components/Hero";
import Title from "../components/Title";

import "react-tabs/style/react-tabs.css";
import Category from "../components/Category";
import CoffeeCards from "../components/coffeeCards";


const Home = () => {

  const categories = useLoaderData()
  return (
    <div>
      <Hero></Hero>
      <Title
        heading={"Browse coffee by  Category"}
        para={
          "Choose your desired coffee catogory to browse though specifig coffee that fit in your taste"
        }></Title>

     
       <div>
       <Category categories={categories}></Category>
       

        <Outlet></Outlet>

       </div>
    </div>
  );
};

export default Home;
