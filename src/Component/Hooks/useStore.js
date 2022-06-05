import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import store from "../Products/Store";
import React from 'react'


function useStore() {
const [itemNumber,setItemNumber] = useState(store.getState().cart.length);
const [toggle,setToggle] = useState(false);



useEffect(()=>{
setInterval(setToggle(!toggle),1000)
setItemNumber(store.getState().cart.length)
},[toggle])


return (<Navbar itemNumber={itemNumber} />)

}

export default useStore

