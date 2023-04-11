import React, { Component} from "react";

export default class Student extends Component{
    render(){
        return(
            <>
             <div>
                Hello {this.props.name} 
                {/* aa page thi koy be vastu ne get na karavi saki because aaya import karavi chi ane taya export karavi chi mate ane aani andar constructer use nathi kar u mate 
                    aaya khali data get thase koy be dat mokali nahi saki*/}
             </div>
             <p>{this.props.email}</p>
             <p>{this.props.img}</p>
            </>
        )
    }
}