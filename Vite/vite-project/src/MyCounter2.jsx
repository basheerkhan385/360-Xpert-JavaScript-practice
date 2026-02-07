
// Example 2 count > 0 and count < 20
import { useState } from "react";

function MyCounter2(){
    const [count , setCount] = useState(0);

    function increment(){
        if (count < 20 ){
            setCount(count + 1)
        } else{
            alert("Count 20 se uper nahi ja sakhtha!")
        }
    }

    function decrement(){
        if(count > 0){
            setCount(count - 1)
        }else{
            alert("Count 0 se kam nahi ja sakhtha")
        }
    }


  return  <>
  <h1>Count from 0 to 20</h1>
  <h1>Count {count}</h1>
    <button onClick={increment}>Count ++ {count}</button>
    <button onClick={decrement}>Count -- {count}</button>
    </>
}
export default MyCounter2;



