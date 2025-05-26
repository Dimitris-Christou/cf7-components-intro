import CounterButton from "./CounterButton.tsx";
import {useCounter} from "../hooks/useCounter.ts";

const counterWithCustomHook = () => {

    const {count, increase, decrease, reset} = useCounter();

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

            {/*<p className="text-center pt-8">Last change: <strong>{state.lastAction}</strong> at {state.time}</p>*/}
        </>
    )
}

export default counterWithCustomHook;