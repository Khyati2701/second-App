import React, { useState} from "react";

const WelcomeToFunctionalCompo = () => {
  const [stateNameAnything, setStateData] = useState(true)
  let data = "Test"
  const BtnClicked = () => {
    console.log("btn clicked");
    data = "Update"
    setStateData(!stateNameAnything)
    console.log(!stateNameAnything);
  }
  return(
    <>
      {data}
      <p>State Data : {JSON.stringify(stateNameAnything) }</p>
      <div>{ stateNameAnything ? <h2>on</h2> : <h2>off</h2>}</div>
      <p>Welcome to functional component in reactjs</p>
      <button onClick={BtnClicked}>click</button>
    </>
  );
};

export default WelcomeToFunctionalCompo;