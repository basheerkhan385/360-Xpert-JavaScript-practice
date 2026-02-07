import { useContext } from "react";
import { MyContext } from "./App";
import PropsA from "./PropesA"


function PropsB(){

    const values = useContext(MyContext);
    return <>
    <h3>Me Props B ho  {values}</h3>
    </>
}
export default PropsB;