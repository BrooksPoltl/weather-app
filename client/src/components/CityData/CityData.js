import React from 'react';
import CityDataCard from './CityDataCard';

import {

    LabelHeader,
    CitiesLabels

} from './styling/CityData.styling'

const CityData = (props) =>{

    return (
        <div>
            <LabelHeader>Your cities:</LabelHeader>
            
            <div>
                <CitiesLabels>Cities that match your range:</CitiesLabels>
                {props.cities.inRangeCities.map((city, index) =>{
                        return <CityDataCard 
                                halfCities = {props.inRangeCities}
                                city = {city} 
                                key = {index} 
                                index = {index}
                                id = {city.id?city.id: null}
                                {...props}
                            />
                })}
                <CitiesLabels>Cities that are out of your range:</CitiesLabels>
                {
                props.cities.notInRangeCities.map((city, index) =>{
                        return <CityDataCard 
                                halfCities = {props.notInRangeCities}
                                city = {city} 
                                key = {index} 
                                index = {index}
                                id = {city.id?city.id: null}
                                {...props}
                            />
                })}
            </div>
        </div>
    )
}

export default CityData;