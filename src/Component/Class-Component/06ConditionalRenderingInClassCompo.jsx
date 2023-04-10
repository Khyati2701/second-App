import React, { Component } from "react";

class ConditionalRenderingInClassCompo extends Component {
    constructor(props) {
        super(props);
        this.state={
            status:true
        }
    }
    
    loginChange=()=>{
        this.setState({status:!this.state.status})
    }
    render() {
        let loginbtn = ""
        const count = 1;

            return (
                <>
                      {count && <h1>Messages: {count}</h1>}

                    <br />
                    {loginbtn}    
                    <br />
                    <button className='btn btn-primary' onClick={this.loginChange}> 
                        { (this.state.status) ? "Logout" :"login" }
                    </button>
                    <br />
                    <br />
                    condition ? true : false.
                    <br />
                    <br />
                    <button className='btn btn-info' onClick={()=>{ this.setState({status:!this.state.status})}}> { (this.state.status)? "Logout":"Login" }</button>
                </>
            );
    };
};

export default ConditionalRenderingInClassCompo;