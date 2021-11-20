import React from 'react'
import { UseStateComps } from './components/01-useState'
//import { SimpleForm } from './components/02-useEffect/SimpleForm'
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook'
import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
import '../src/HooksApp.css';
import { FocusScreen } from './components/04-useRef/FocusScreen';

export const HooksApp = () => {
    return (
        <div>
            <h1>Hooks App</h1>
            <hr />
            
            <FocusScreen />
            <br />
            
            {/* <MultipleCustomHooks />
            <br /> */}

            <FormWithCustomHook />
            <br />
             {/* <UseStateComps /> */}
            
        </div>
    )
}
