import React from 'react'
import { CounterApp } from './components/01-useState/CounterApp'
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook'

export const HooksApp = () => {
    return (
        <div>
            <h1>Hooks App</h1>
            <hr />
            <CounterWithCustomHook />
            <CounterApp />
        </div>
    )
}
