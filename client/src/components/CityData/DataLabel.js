import React from 'react';

import {
    
    LabelContainer,
    DescriptiveText,

} from './styling/CityData.styling'

const DataLabel = () => {
    return(
        <LabelContainer>
            <DescriptiveText>city:</DescriptiveText>
            <DescriptiveText>temperature:</DescriptiveText>
            <DescriptiveText>min degrees:</DescriptiveText>
            <DescriptiveText>max degrees:</DescriptiveText>
        </LabelContainer>
    )
}

export default DataLabel;