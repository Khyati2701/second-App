import React from "react";
import { Component } from "react";
import UpdatedComponenet from "./WithCounter";

// A patter where function take arragumant return new component it called higher order component
class Mouseover extends Component{    
    constructor(){
         super()
            this.state={
                count : 0
            }
    }
    incrementdata = () =>{
        this.setState(prevState =>{
            return{ count: prevState.count + 1}
        })
    }
    render(){
        const {count} = this.state 
        return(
            <>
                <button onmouseover={this.incrementdata}>{this.props.name}click {count} times</button>
            </>
        )
    }
}

export default UpdatedComponenet (Mouseover);