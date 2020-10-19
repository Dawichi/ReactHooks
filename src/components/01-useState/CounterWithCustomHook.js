import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.css'

export const CounterWithCustomHook = () => {

    const { state:counter, increment, decrement, reset } =  useCounter(100)

    return (
        <>
            <h1>Counter with Hook: { counter }</h1>
            <hr />

            <button onClick={ () => increment(1) } className="btn"> +1 </button>
            <button onClick={ () => decrement(1) } className="btn"> -1 </button>
            <button onClick={ reset } className="btn"> Reset </button>
        </>
    )
}
