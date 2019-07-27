import React from 'react';
import CityDataCard from './CityDataCard';

const CityData = (props) =>{
    console.log(props)
    return (
        <div>
            <div style = {{display: "flex"}}>
                <p>city:</p>
                <p>temperature:</p>
                <p>min degrees:</p>
                <p>max degrees:</p>
            </div>
            <div>
                {props.inRangeCities.map((city, index) =>{
                    return <CityDataCard city = {city} key = {index} />
                })}
                {props.notInRangeCities.map((city, index) =>{
                    return <CityDataCard city = {city} key = {index} />
                })}
            </div>
        </div>
    )
}

export default CityData;