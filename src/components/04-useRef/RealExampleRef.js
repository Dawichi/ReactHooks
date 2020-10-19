import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

import '../02-useEffect/effect.css'

export const RealExampleRef = () => {

    const [show, setShow] = useState(false)

    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr/>
            
            <button
                className=" btn btn-info mt-5 mb-5 "
                onClick={ () => {
                    setShow( !show )
                }}
            >
                Show/Hide
            </button>

            { show && <MultipleCustomHooks /> }

        </div>
    )
}
