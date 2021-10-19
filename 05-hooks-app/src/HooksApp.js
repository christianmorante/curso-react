import React from 'react'
import { UseStateComps } from './components/01-useState'
//import { SimpleForm } from './components/02-useEffect/SimpleForm'
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook'
import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks'

export const HooksApp = () => {
    return (
        <div>
            <h1>Hooks App</h1>
            <hr />
            
            <MultipleCustomHooks />
            <br />

            {/*<FormWithCustomHook />
            <br />
             <UseStateComps /> */}
            
        </div>
    )
}
