import { createBrowserRouter } from "react-router-dom";
import MainCoffee from './../layouts/MainCoffee';
import Home from "../pages/Home";
import CoffeeCards from "../components/coffeeCards";
import CoffeeAllcards from "../components/CoffeeAllcards";
import Dasboard from "../pages/Dasboard";
import DetailsCoffee from "../pages/DetailsCoffee";


const routers = createBrowserRouter([

  {
    path:'/',
    element:<MainCoffee></MainCoffee>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('../catories.json'),
        children:[
          {
            path:'/',
            element:<CoffeeCards></CoffeeCards>,
            loader:()=>fetch('../coffees.json'),
          },
         
        
          {
            path:'/coffeCard/:obg',
            element:<CoffeeCards></CoffeeCards>,
            loader:()=>fetch('../coffees.json'),
          }
        ] 
      },
      {
        path:'/coffee',
        element:<CoffeeAllcards></CoffeeAllcards>,
        loader:()=>fetch('../coffees.json'),
      },
   
      {
        path:'/dashboard',
        element:<Dasboard></Dasboard>,
        loader:()=>fetch('../coffees.json'),
      },
      
      {
        path:'/detailscoffee/:userId',
        element:<DetailsCoffee></DetailsCoffee>,
        loader:()=>fetch('../coffees.json'),
      }
    
    ]
  }
])

export default routers;