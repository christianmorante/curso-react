import React from 'react'
import { UseStateComps } from './components/01-useState'

import { SimpleForm } from './components/02-useEffect/SimpleForm'

export const HooksApp = () => {
    return (
        <div>
            <h1>Hooks App</h1>
            <hr />
            <SimpleForm />
            <br />
            <UseStateComps />
            
        </div>
    )
}
