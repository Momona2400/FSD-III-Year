import React, { useEffect } from 'react'
import { useState } from 'react';
const Counter = () => {
    // let count=0;
    const [count,setCount]=useState(0);
    const [message,setMessage]=useState("");
    useEffect(()=>{
        setMessage(`Updated count=${count}`)
    },[count])
    function increment(){
        // ++count;
        setCount(count+1);
        console.log("count=",count);
    }
    const decrement=()=>{
        setCount(count-1);
        console.log("count:",count);
    }
  return (
    <div>
        <h1>Counter App</h1>
      <div classname="counter" style={{display:'flex'}}>
      <button className="btn" onClick={increment}>+</button>
      <div className="count">{count}</div>
      <button className="btn" onClick={decrement}>-</button>
    </div>
    <h2>{message}</h2>
    </div>
  )
}

export default Counter