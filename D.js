import React, {useContext} from "react"
import {Context} from './A'

function Marks(){
    const data = useContext(Context) 
    return(
        <React.Fragment>
        <h1>D.js</h1>
        <h1>{data}</h1>
        </React.Fragment>
    )
}

export default Marks
