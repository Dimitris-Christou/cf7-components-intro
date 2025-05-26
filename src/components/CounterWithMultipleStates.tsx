import {useState} from "react";
import CounterButton from "./CounterButton.tsx";

const CounterWithMultipleStates = () => {
    const[count, setCount] = useState(0);
    const [lastAction, setLastAction] = useState("");
    const [time, setTime] = useState("");

    const getCurrentTime = () => new Date().toLocaleDateString();

    const increaseCount = () => {
        setCount(count + 1);
        setLastAction("Increase");
        setTime(getCurrentTime);
    }

    const resetCount = () => {
        setCount(0);
        setLastAction("Reset");
        setTime(getCurrentTime);
    }

    const decreaseCount = () => {
        if (count > 0) {
            setCount(count - 1);
            setLastAction("Decrease");
            setTime(getCurrentTime);
        }

    }

    return (
        <>
            <div className="space-y-4 pt-12">

                <h1 className="text-center">Count is {count}</h1>


                <div className="text-center space-x-4">
                    <CounterButton onClick={increaseCount} label="Increase"/>
                    <CounterButton onClick={decreaseCount} disabled={count === 0} label="Decrease"/>
                    <CounterButton addClass="bg-cf-dark-red" onClick={resetCount} disabled={count === 0} label="Reset"/>
                </div>
            </div>
            <p className="text-center pt-8"><strong>Last change: {lastAction} at {time}</strong></p>

        </>
    )
}

export default CounterWithMultipleStates;