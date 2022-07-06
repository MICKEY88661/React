import React from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
    let { todoID } = useParams()
    return (
        <div className="card m-8">Detail for {todoID}</div>
    )
}

export default Detail