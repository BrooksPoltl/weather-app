import React, {useEffect, useState} from 'react'
import AddCityForm from '../../components/AddCityForm/AddCityForm';
import CityData from '../../components/CityData/CityData';
import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/Header/Header';
import axios from 'axios';

import { 
    
  AppContainer,
  TopSectionContainer

} from './DashboardPage.styling';

const DashboardPage = (props) =>{
    const [city, setCity] = useState({inRangeCities:[], notInRangeCities:[]})
    useEffect(()=>{

        const token = localStorage.getItem('token');
        const BASE_URL = "https://weather-project-api.herokuapp.com";
        const request = {
            headers: {
                authorization: token,
            },
        }
        if(token){
            axios.get(`${BASE_URL}/api/citydata`, request).then(res=>{
                setCity(res.data)
            }).catch(err=>{
            })
        }
        else{
            setCity({inRangeCities: props.inRangeCities, notInRangeCities: props.notInRangeCities})
        }
    },[]);
    
 
    return (
        <div>
            <NavBar {...props}/>
            <AppContainer>
                <TopSectionContainer>
                    <Header {...props}/>
                    <AddCityForm {...props}/>
                </TopSectionContainer>
                <CityData cities = {city} {...props}/>
            </AppContainer>
        </div>
    )
}

export default DashboardPage;