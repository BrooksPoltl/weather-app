import styled from 'styled-components';

export const CardContainer = styled('div')`
    border: 1px solid red;
    background: red;
    width: 200px;
    height: 200px;
`
export const TemperatureText = styled('p')`
`
export const MainTempText = styled('p')`
    font-size: 50px;
    padding: 50px 0px;
    color: ${props=>props.color?props.color:''};
`
export const MainTempWrapper = styled('div')`
    background: white;
    width: 150px;
    height: 150px;
    text-align: center;
    vertical-align: center;
    margin: 0px 25px;
    border-radius: 50%;
`
export const CityText = styled('p')`
    
`
export const RangeInput = styled('input')`
` 

export const SubmitButton = styled('button')`

`