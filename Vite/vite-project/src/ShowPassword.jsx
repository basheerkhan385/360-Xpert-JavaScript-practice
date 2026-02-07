

// Show password Example use state


import { useState } from "react";

function ShowPassword(){
    const [showPass, setPass] = useState(false);

    return <>
    <input type={showPass ? "text": "password"} />
    <button onClick={() => setPass(!showPass)}>showpassword click me </button>
    </>
}
export default ShowPassword;