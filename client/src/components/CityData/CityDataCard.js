import React from 'react'


const CityDataCard = (props) =>{
    return(
        <div>
            <p>{props.city.city}</p>
            <p>{props.city.temperature}</p>
        </div>
    )
}

export default CityDataCard;