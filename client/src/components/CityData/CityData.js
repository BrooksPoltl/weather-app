import React,{ useState } from 'react';
import CityDataCard from './CityDataCard';
import {
    LabelContainer,
    LabelHeader
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
            <LabelContainer>
                <p>city:</p>
                <p>temperature:</p>
                <p>min degrees:</p>
                <p>max degrees:</p>
            </LabelContainer>
            <div>
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