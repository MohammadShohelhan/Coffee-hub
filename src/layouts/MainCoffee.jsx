
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from './../components/Navbar';


const MainCoffee = () => {
  return (
    <div className='w-[100%]'>
        <div className='w-[95%] mx-auto'>
        <Navbar ></Navbar>
        </div>
         <div className='w-[95%] mx-auto min-h-[calc(100vh-242px)]'>
          <Outlet></Outlet>
         </div>
         <div className=''>
         <Footer></Footer>
         </div>
        
    </div>
  )
}

export default MainCoffee