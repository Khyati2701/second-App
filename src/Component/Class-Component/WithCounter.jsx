import React from "react";
import { Component } from "react";




const UpdatedComponenet = originalComponent => {
    class Newcounter extends Component {
        render(){
            return(
                <originalComponent name="khyati"/>
            )
        }
    }
    // return Newcomponent 
}

export default UpdatedComponenet;