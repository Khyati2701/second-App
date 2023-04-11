import React, { Component } from 'react';

class StateInClassCompo extends Component {
//class classname inheritance component  
    //1. State: it means memory allocation
    //aapde aapda j comonent mathi memory allocate kar vani hoy tayare state no use thay che ane jayare bija component mathi memory lavani hoy tayare props no use thay che
    //jayare be state property use karvi hoy tayare ek constructor ni jarura pade. 
    //constructor ma this parameter no use thay.
    // ane jayare pn constructor no use kari super keyword no use karvo j pade.
    //constructor state mate default che.

    constructor(){
        super()
        this.state = {
            data: 1 
        }
    }
    change(){
        // this.setState ({data: "My name is Khyati"})//state na data change kari sako 
        this.setState ({data: this.state.data + 1})
    }
    render(){
        return(
            <>
                <div>
                    <h1>state:</h1>
                    <h2>{this.state.data}</h2>
                    <button onClick={() => this.change()}>update data</button>
                </div>
            </>
        )
    }
}

export default StateInClassCompo;