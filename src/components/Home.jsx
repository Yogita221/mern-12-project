import React from 'react'
import Nav from './Nav'
import { Link, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { ProductContext } from "../Utils/Context";
import Loading from './Loading';

const Home = () => {

  const [products] = useContext(ProductContext);
  const {search} = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);
  console.log(category);
  

  return products? ( 
    <>
    <Nav />

    
    <div className=' w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto '>
      
      {products.map((p, i) =>(
         <Link
         key={p.id}
         to={`/details/${p.id}`} 
         className='card p-3 border shadow rounded w-[18%] h-[30vh] flex-col flex justify-center items-center'
         >

         <div
         className='hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center'
         style={{
          backgroundImage: `url(${p.image})`
          }}
           ></div>
           <h1 className='hover:text-blue-400'>{p.title}</h1>
       </Link>
      ))}




    
</div>

</>
  ) : (
    <Loading />
  );
}

export default Home
