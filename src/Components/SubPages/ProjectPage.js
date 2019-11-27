import React from 'react'

export default function ProjectPage(param) {
    console.log(param)
    return (
        <div className="container">
            {param.match.params.id}
        </div>
    )
}
