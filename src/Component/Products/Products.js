import React, { useState } from 'react'
import cartReducer from '../reducer/reducer'
import store from './Store'
function Products({key,name,price,src}) {

  const pushItem = ()=>{
    return {
      type: 'item/added',
      payload:{
        "id":Math.floor(Math.random()*1000),
        "name":name,
        "price":price,
        "src":src
      }
    }
  }
  const getInformation = (e)=>{

  
      

    store.dispatch(pushItem())
    console.log('dispatched')
    
        
      
  }
  return (
    <div >
      <div class="card card-compact w-96 bg-base-100 h-89 shadow-xl">
  <figure><img src={src} alt="Cars"  class='object-fill h-70 w-96'/></figure>
  <div class="card-body">
    <h2 class="card-title">{name}</h2>
    <p class='font-semibold '>{price}$</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary" onClick={getInformation}>Add to cart</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Products
