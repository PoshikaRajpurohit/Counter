import { useState}  from "react";
const Counter =() =>{
    const[count,setCount]=useState(0);
    const incre =()=>{
      setCount(count+1);      
    }
    const decre =()=>{
      if(count === 0) {
        alert("Count is already zero can't be decreased further..")
        return;
      } 
        setCount(count-1);
    }
    const reset =()=>{
      setCount(0);      
    }
    return(
      <div className="counter-container">
        <h1>Counter</h1>
        <h1 className="count">{count}</h1>
        <div className="btn-group">
          <button onClick={incre} className="in">Increment</button>
          <button onClick={decre} className="de">Decrement</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    )
}


export default Counter;
