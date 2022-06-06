import React,{useEffect, useState} from 'react'
import store from '../Products/Store'
const _=require('lodash');
function Cart() {
const [arrofPrices,setarrofPrices] = useState([])
    const [sum,setSum] = useState(0);



       
   
    
  return (
      <div>

    <div class="stats bg-primary text-primary-content ml-[65vh]">
    <ul class="menu bg-base-100 w-56 text-white">
        {store.getState().cart.map((products)=>{
            
            return(<li><a>{products.name}</a></li>)
        })}



</ul>
    <div class="stat">
      <div class="stat-title">Account total</div>
      <div class="stat-value">{0}</div>
      <div class="stat-actions">
        <button class="btn btn-sm btn-success">Buy Now</button>
      </div>
    </div>
    
    
    
  </div>
  </div>
  )
}

export default Cart
