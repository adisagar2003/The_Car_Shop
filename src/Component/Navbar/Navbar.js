import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux';
import {connect} from 'react-redux';
import store from '../Products/Store';
function Navbar({cart}) {

const [data,setData] = useState({})

  const [toggle,setToggle] = useState(false);
  
   useEffect(()=>{
     let count =0
     console.log('I re-rendered')
    setData(cart.getState())
    setInterval(()=>{
      setToggle(!toggle)
    },1000)
    
  

   },[toggle])

   console.log(data,'actua Data')




  

  
  
  return (
    
      <div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl"><span class='text-green-500'>The Car</span> Shop</a>
  </div>
  <div class="flex-none">
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span class="badge badge-sm indicator-item" 
     >{store.getState().cart.length}</span>
        </div>
      </label>
      <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div class="card-body">
          <span class="font-bold text-lg" >{store.getState().cart.length} Items</span>
          <span class="text-info">Subtotal: {store.getState().cart[0].price}</span>
          <div class="card-actions">
            <button class="btn btn-primary btn-block" onClick={console.log(cart,'huh')}>View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div class="dropdown dropdown-end">
      
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    
    </div>
  </div>

</div>
   
  )
}

const mapStateToProps = state=>{
    return {
      cart:store
    }
}

export default connect(mapStateToProps)(Navbar)
