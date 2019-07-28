import React,{ useState } from 'react';
import CityDataCard from './CityDataCard';
import DataLabel from './DataLabel';

import {

    LabelContainer,
    LabelHeader,
    DescriptiveText,
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
        setEditing(false)
    }
    return (
        <div>
            <LabelHeader>Your cities:</LabelHeader>
            
            <div>
                <CitiesLabels>Cities that match your range:</CitiesLabels>
                <DataLabel/>
                {props.inRangeCities.map((city, index) =>{
                        return <CityDataCard 
                                cities = {props.inRangeCities}
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
                props.notInRangeCities.map((city, index) =>{
                        return <CityDataCard 
                                cities = {props.notInRangeCities}
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