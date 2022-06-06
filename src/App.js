import React, {useState} from "react";
// 1st import useState
//useState => useState is a hook which is used to manage state of react
// hooks are predefined function of react

export default function App() {
 
let [test, setTest]= useState(0)
// test is state varible
// setTest is a function which will manage value of state varible
// useState('') => default value passing for state varible


//------function--------

function increment(){
  setTest(test+1)
}

function decrement(){
  setTest(test-1)
}


//------- 2nd Pard -------------

/*
  => conditional statement under return we use ? : 
     ---- ? true => in quemark section we written true statement 
     ---- : false => in colon section we written false statement 

*/


let [name, setName] = useState("Monday")
let [state, setState] = useState(true)


function changeName(){
  setName("Sunday")
  setState(false)
}

  return (
    <>
    {/* first part */}
    <div>
      <button onClick={increment}> + </button> 
      <button onClick={decrement}>-</button>
      <span> {test}  this is state variable :)</span>
    </div>
    <hr/>

    <p></p>

    {/* second part */}
    <button onClick={changeName}>Change Name</button>

    {/* inline function k through event manage krne k liye arrow function ka use krte hai */}
    <button onClick={()=> {setName("Monday"), setState(true)}}> Reset</button>
                    {/* above using inline function */}
    <div>{name}</div>

    {
      state
      ? <div style={{backgroundColor:"green"}}>change color green for monday</div>
      : <div style={{backgroundColor:"red"}}>change color red for sunday</div>
    }


    </>
  );
}
