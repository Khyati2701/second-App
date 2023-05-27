import React, { useEffect, useLayoutEffect, useState} from "react";

const FunctionalCompoUseEffect = () => {
    const [stateNameAnything, biju] = useState(true)
    const [SecondState, SetSecondState] = useState(0)

    useEffect(()=>{
        console.log("useEffect");
    },[stateNameAnything])
    useLayoutEffect(()=>{

        console.log("useLayoutEffect");
        return() => {
            console.log("called return");
        };
    },[])

    const BtnClicked = () => {
        console.log("BtnClicked");
        biju(!stateNameAnything)
    }
    const BtnClickedOther = ()=> {
        console.log("BtnClicked for SecondState");
        SetSecondState(SecondState+1)
    }
    return(
        <>
        <p>UseEffect Hook</p>
        {JSON.stringify(stateNameAnything)}
        <button onclick={BtnClicked}>Click</button>
        <button onclick={BtnClickedOther}>Click {SecondState}</button>
        <br/><br/>
        </>
    );
    };


export default FunctionalCompoUseEffect;