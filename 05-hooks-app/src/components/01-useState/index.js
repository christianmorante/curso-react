import React from 'react'
import { CounterApp } from './CounterApp'
import { CounterWithCustomHook } from './CounterWithCustomHook'

export const UseStateComps = () => {
    return (
        <>
            <h1>useState</h1>
            <hr />
            <CounterApp />
            <br />
            <CounterWithCustomHook />
        </>
    )
}
