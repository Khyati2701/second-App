import React from 'react';
import { useState } from 'react';
import { useReducer } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const initval = { count: 0 ,show:false}
function funname(state, action) {
    console.log("State ", state.count, "action ", action.type);
    switch (action.type) {
        case "decrement":
            return { count: state.count - 1 }
        case "increment":
            return { count: state.count + 1 }
        case "show":
            return { show: true }
        default:
            console.log("Called by default");
            break;
    }
}
const FunctionalCompoUseReducer = () => {
    const [stateData,setStateData] = useState("")
    const [state, dispatch] = useReducer(funname, initval)
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    return (
        <>
            <button onClick={() => dispatch({ type: 'decrement' })}>decrememnt</button>
            {state.count}
            <button onClick={() => dispatch({ type: 'increment' })}>increment</button>


            <Button variant="primary" onClick={() => dispatch({ type: 'show' })}>
                Launch demo modal
            </Button>

            <Modal show={state.show}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" >
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default FunctionalCompoUseReducer;