import { useState } from "react";

function MyCounterApp(){
    const [count , setCount] = useState(0);
    return <div>
        <h1>Count : {count}</h1>
        <button onClick={() => setCount(count + 1)}>
            Count ++
        </button>
    </div>
}

export default MyCounterApp;