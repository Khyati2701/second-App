import React, { Component } from "react";

class ListKeysInClassCompo extends Component{

        //jayare pn aapade data ne structuraised from ma arrange karvo che tayare kist no use kari chi apade.
        //data always object and array na from ma aavse tene structurerised form ma arrange karva mate list no use kari chi.
        //List: it means data structure wise set karva.
        //array: it is non primitive datatype.it can use to store  multipal datatype in one datatype.
        //array: return index start with(0).
        //object: return key and value.
    render(){
        const items = [1,2,3,4,5]
        console.log(items);
        return(
            <>
            <h1>return</h1>
            </>
        )
    }
}

export default ListKeysInClassCompo;