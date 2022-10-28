import React from "react";
import {useState} from 'react'
import {Link} from "react-router-dom"

export default function Error({error, resetErrorBoundary}) {
     [error, resetErrorBoundary] = useState(false)
    return (
        <div className='error_bg'>
            
            <h2>{error.message}</h2>
            <button onClick={()=>resetErrorBoundary(error => !error)}> TRY AGAIN</button>
           {error ? <Link to='/'>Go Back Home </Link>: null}
            
        </div>
    )
}