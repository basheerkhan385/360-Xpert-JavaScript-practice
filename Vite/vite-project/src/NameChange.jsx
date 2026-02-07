import { useState } from "react";

function NameChange(){
    const [name , setName] = useState("");

    return <div>
        <h1>Hello {name}</h1>
        <input type="text"  onChange={(e) => setName(e.target.value)}/>
    </div>
}
export default NameChange;