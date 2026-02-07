import MyCounter from "./MyCounter"
import ShowPassword from "./ShowPassword";
import MyCounter2 from "./MyCounter2";
import NameChange from "./NameChange";
// import FocusInput from "./UseRefrence";
import PropsA from "./PropesA";
import { createContext } from "react";
// import Timer from "./UseRefrence";
// import TimerEffect from "./UseEffectFile";
import Card from "./components/Card";

let x = "Hi Basheer "

const Data = {
  UserName : "Basheer",
  Age : 23
}

export const MyContext = createContext();

function App() {
  return (
    <>
    <MyContext.Provider value={x}>


    <h1>Me parent component ho</h1>
    <PropsA/>

    <Card Name = "Basheer" BtnText1 = "Card 1" BtnText2 = "Vesit me 1 " views = "12k" Txt = "Natural World"/>
    <Card Name = "Danish" BtnText1 = "Card 2" BtnText2 = "Vesit me 2 " views = "54k" Txt = "Snow Mountain"/>
      {/* <MyCounter/> */}
      <br /><br />
      {/* <MyCounter2/> */}
      <br /><br />
      {/* <ShowPassword/> */}
      <br /><br />
      {/* <NameChange/> */}

      {/* <FocusInput/> */}
      {/* <Timer/> */}
      {/* <TimerEffect/> */}


      </MyContext.Provider>
    </>
  )
}

export default App;
