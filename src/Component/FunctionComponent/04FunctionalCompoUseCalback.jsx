import React, { useCalback, useState } from "react";

const funccount = new Set();
const FunctionalCompoUseCalback = () => {
    const[count, setCount] = useState(0);
    const[number, setNumber] = useState(0);

    const incrementCounter = useCalback(() => {
        setCount(count + 1);
    }, [count]);

    const decrementCounter = useCalback(() => {
        setCount(count - 1);
    }, [count]);

    const incrementNumber = useCalback(() => {
        setNumber(Number + 1);
    }, [number]);

    funccount.add(incrementCounter);
    funccount.add(decrementCounter);
    funccount.add(incrementNumber);
    console.log(funccount.size);
    return(
        <div className="mb-5">
            count: {count} <br />
            Number: {number} <br />
            <button onClick={incrementCounter}>Increase counter</button>
            <button onClick={decrementCounter}>Decrease counter</button>
            <button onClick={incrementNumber}>increase number</button>
        </div>
    );
};

export default FunctionalCompoUseCalback;