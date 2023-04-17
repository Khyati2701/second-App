import React, { Component } from "react";

class ListKeysInClassCompo extends Component{

        //jayare pn aapade data ne structuraised from ma arrange karvo che tayare kist no use kari chi apade.
        //data always object and array na from ma aavse tene structurerised form ma arrange karva mate list no use kari chi.
        //List: it means data structure wise set karva.
        //array: it is non primitive datatype.it can use to store  multipal datatype in one datatype.
        //array: return index start with(0).
        //object: return key and value.
        //map:callback function 6.
        //ek j array ne destructure kar vano hoy. 
        //keys: unique identification of list.
        //typecasting: ek datatype ne bija ma  change karvu.
        //method means predefine function.
        constructor(){
            super()
            this.state = {
            items: [1,2,3,4,5]
            }
        }
        update = () =>{
            this.setState({
                items: [1,2,3,4,5,6]
            })
        }
    render(){
        const items = [1,2,3,4,5]
        const mylist = this.state.items.map((mydata)=> <li key={mydata.toString()}>{mydata}</li>)
        console.log(items);
        return(
            <>
            <h1>this is my list and keys</h1>
            <div>
                <ul>{mylist}</ul>
                <button onClick={this.update}>update</button>
            </div>
            </>
        )
    }
}

export default ListKeysInClassCompo;