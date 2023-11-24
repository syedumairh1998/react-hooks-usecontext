import React, { createContext } from "react"
import B from "./B"

const Context = createContext()

function Marks() {
    return (
        <React.Fragment>
            <h1>A.js</h1>


            <Context.Provider value='Syed Umair Hussain'>
                <B />
            </Context.Provider>
        </React.Fragment>
    )
}

export default Marks
export {Context}
