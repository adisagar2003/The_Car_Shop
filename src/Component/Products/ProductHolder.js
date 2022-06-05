import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Products from './Products';

function ProductHolder() {

    const [isLoaded,setLoaded] = useState(false);
    const [response,setResponse] = useState([]);
    console.log(response,'aa    ')
    useEffect(()=>{
        axios.get('https://secret-reaches-16493.herokuapp.com/login').then(function (response) {
    
            console.log(response);
            setResponse(response);
            setLoaded(true);
           
          })
    },[isLoaded])
    
  return (
    <div class='flex gap-6 flex-wrap ml-20 mt-10'>
      {isLoaded ? response.data.map((res)=>{
    return(<div>   <Products  key ={res.id} name={res.productName} src={res.productImage} price={res.productPrice}/></div>)
    
        
    }):<h3>aa</h3>
      
   
      
      }

    </div>
  )
}

export default ProductHolder
