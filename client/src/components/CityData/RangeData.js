import React from 'react'

const RangeData = (props) =>{
    return(
        <div>
            <p>{props.city.range[0]}</p>
            <p>{props.city.range[1]}</p>
        </div>
    )
}

export default RangeData