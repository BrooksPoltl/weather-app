import React from 'react';
import CityDataCard from './CityDataCard';

const CityData = (props) =>{

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
                    return <CityDataCard 
                                cities = {props.inRangeCities} 
                                city = {city} 
                                key = {index} 
                                index = {index}
                                {...props}
                            />
                })}
                {props.notInRangeCities.map((city, index) =>{
                    return <CityDataCard 
                                cities = {props.notInRangeCities} 
                                city = {city} 
                                key = {index} 
                                index = {index}
                                {...props}
                            />
                })}
            </div>
        </div>
    )
}

export default CityData;