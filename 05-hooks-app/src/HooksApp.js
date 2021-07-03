import React from 'react'
import { UseStateComps } from './components/01-useState'
//import { SimpleForm } from './components/02-useEffect/SimpleForm'
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook'

export const HooksApp = () => {
    return (
        <div>
            <h1>Hooks App</h1>
            <hr />
            <FormWithCustomHook />
            <br />
            <UseStateComps />
            
        </div>
    )
}
