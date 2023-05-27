import React, { Component} from "react";


class Student extends Component{
    render(){
        return(
            <>
             <div style={{backgroundColor:'skyblue'}}>
                Hello {this.props.name} 
                {/* aa page thi koy be vastu ne get na karavi saki because aaya import karavi chi ane taya export karavi chi mate ane aani andar constructer use nathi kar u mate 
                    aaya khali data get thase koy be data mokali nahi saki*/}
             </div>
             <p style={{backgroundColor:'black'}}>{this.props.email}</p>
            </>
        )
    }
}
export default Student;