import React,{ useState,useEffect } from 'react';
import CityDataCard from './CityDataCard';
import DataLabel from './DataLabel';

import {

    LabelHeader,
    CitiesLabels

} from './styling/CityData.styling'

const CityData = (props) =>{
    const [editing, setEditing ] = useState(false); 
    const [newRange, setNewRange] = useState({minimum: 0,maximum: 0})
    
    const handleEdit = async(event,index,inRange) =>{
        event.preventDefault();
        newRange.minimum = Number(newRange.minimum);
        newRange.maximum = Number(newRange.maximum);
        if(inRange){
            await props.editRange(props.inRangeCities,index,inRange, newRange.minimum, newRange.maximum)
        }
        else{
            await props.editRange(props.notInRangeCities,index,inRange, newRange.minimum, newRange.maximum)
        }
        setEditing(false);
    }
    console.log(props)
    const token = localStorage.getItem('token');
    return (
        <div>
            <LabelHeader>Your cities:</LabelHeader>
            
            <div>
                <CitiesLabels>Cities that match your range:</CitiesLabels>
                <DataLabel/>
                {props.cities.inRangeCities.map((city, index) =>{
                        return <CityDataCard 
                                halfCities = {props.inRangeCities}
                                editing = {editing}
                                setEditing = {setEditing}
                                newRange = {newRange}
                                setNewRange = {setNewRange}
                                handleEdit = {handleEdit}
                                city = {city} 
                                key = {index} 
                                index = {index}
                                {...props}
                            />
                })}
                <CitiesLabels>Cities that are out of your range:</CitiesLabels>
                <DataLabel/>
                {
                props.cities.notInRangeCities.map((city, index) =>{
                        return <CityDataCard 
                                halfCities = {props.notInRangeCities}
                                editing = {editing}
                                setEditing = {setEditing}
                                newRange = {newRange}
                                setNewRange = {setNewRange}
                                handleEdit = {handleEdit}
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