import { useState } from "react";
import { useEffect } from "react";


function MyCounter() {

// Use State

    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    // Use Effect

    useEffect(() => {
        console.log("Effect 1 Hello Basheer Yuo clicked ",count," Times")

    });
    
    // Empty 
    useEffect(() => {
        console.log("Effect 2 Hello Basheer Yuo clicked ",count," Times")

    },[]);
// value 
    useEffect(() => {
        console.log("Effect 3 Hello Basheer Yuo clicked ",count," Times")

    },[count]);


    return <>
    <h1>My Counter</h1>
    
    <h2>Count : {count}</h2>

    <button onClick={() => setCount(count + 1)}>1st Count ++ </button>

    <button onClick={() => setCount(count - 1)}>1st Count -- </button>

    {/* Button 2 */}
    <button onClick={() => setCount1(count + 1)}> 2nd Count  ++ </button>

    <button onClick={() => setCount1(count - 1)}>2nd Count -- </button>
    </>

}
export default MyCounter;

