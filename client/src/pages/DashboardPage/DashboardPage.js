import React from 'react'
import AddCityForm from '../../components/AddCityForm/AddCityForm';
import CityData from '../../components/CityData/CityData';
import Header from '../../components/Header/Header';

import { 
  AppContainer,
  TopSectionContainer
} from './DashboardPage.styling';

const DashboardPage = (props) =>{
    return (
        <AppContainer>
            <TopSectionContainer>
                <Header />
                <AddCityForm {...props}/>
            </TopSectionContainer>
            <CityData {...props}/>
        </AppContainer>
    )
}

export default DashboardPage;