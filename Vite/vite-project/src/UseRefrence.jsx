// import { useRef } from "react";
// import { useState } from "react";

// function FocusInput(){
//     const inputRef = useRef(null);

//     const [text , setText] = useState("")

//     return ( <>

//     <h3>Text = {text}</h3>

//     <input type ="text"  ref={inputRef}  onChange={(e) => setText(e.target.value)}/>
//     < button onClick={ () => inputRef.current.focus()} > 
//     Focus 
//     </button>
    
//     </>
//     );
// }
// export default FocusInput;


// Exampl 1

// import { useRef } from "react";

// function Timer() {
//   const countRef = useRef(0);

//   const increase = () => {
//     countRef.current += 1;
//     console.log(countRef.current); // UI re-render nahi hoti
//   };

//   return <button onClick={increase}>Increase Timer</button>;
// }
// export default Timer