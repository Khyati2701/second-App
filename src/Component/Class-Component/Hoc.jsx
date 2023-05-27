import { Component } from "react";
import React from "react";
import ClickCounter from "./clickcounter.jsx";
import MouseOver from "./mouseover.jsx";

class Hoc extends Component{
    render(){
        return (
            <>
                <h1>Hoc</h1>
                <ClickCounter/>
                <MouseOver/>
            </>
        )
    }
}

export default Hoc;