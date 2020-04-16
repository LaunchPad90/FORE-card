import React from 'react'

export default function Par(props) {
    const course = props.course.map((par, idx) => {
        return (
            <div>
                <p>par: {par.pars}</p>
            </div>
        )

    })

    return (
        <div>
            {course}
        </div>
    )

}
