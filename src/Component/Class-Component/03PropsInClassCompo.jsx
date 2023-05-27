import React, { Component } from 'react';
import Student from "./Student";

class PropsInClassCompo extends Component{
    constructor(){
        super();
        this.state={
            name:"khyati"
        }
    }
    render(){
    return (
        <>
            {/* props: it means ek page mathi bijs page ma data get karvo.
             ek page ni propertices ne bijs page ma lay javi */}
             <h1>This is my props</h1>
             <p>props: it means ek page mathi bija page ma data get karavo.
             ek page ni propertices ne bijs page ma lay javi</p>
             <Student name={this.state.name} 
             email="khyati.jani27@gamil.com" />
             <button onClick={()=>this.setState({name:"jani"})}>Update Name</button>
        </>
    );
};
};

export default PropsInClassCompo;
