import CounterButton from "./CounterButton.tsx";
import {useCounterWithReducer} from "../hooks/useCounterWithReducer.ts"

const counterWithReducer = () => {

    // Custom Hook function
    const {count, lastAction, time, increase, decrease, reset  } = useCounterWithReducer();

    return (
        <>
            <div className="space-y-4 pt-12">

                <h1 className="text-center">Count is {count}</h1>

                <div className="text-center space-x-4">
                    <CounterButton onClick={increase} label="Increase"/>
                    <CounterButton onClick={decrease} disabled={count === 0} label="Decrease"/>
                    <CounterButton addClass="bg-cf-dark-red" onClick={reset} disabled={count === 0} label="Reset"/>
                </div>
            </div>

            <p className="text-center pt-8">Last change: <strong>{lastAction}</strong> at {time}</p>
        </>
    )
}

export default counterWithReducer;