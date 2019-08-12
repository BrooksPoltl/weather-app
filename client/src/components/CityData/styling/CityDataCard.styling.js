import styled from 'styled-components';

export const CardContainer = styled('div')`
    border: 1px solid red;
    width: 300px;
    height: 300px;
    margin: 30px;
    background: #013d79;
`
export const TemperatureText = styled('p')`
`
export const MainTempText = styled('p')`
    font-size: 50px;
    font-weight: bold;
    -webkit-text-stroke-width: 3px;
   -webkit-text-stroke-color: black;
    padding: 50px 0px;
    color: ${props=>props.color?props.color:''};
`
export const MainTempWrapper = styled('div')`
    background: white;
    width: 150px;
    height: 150px;
    text-align: center;
    vertical-align: center;
    margin: 0px 75px;
    border-radius: 50%;
    box-shadow: 0px 0px 0px 2px;
    border: ${props=>props.color? `3px solid ${props.color}`: '3px solid black'}
`
export const CityText = styled('p')`
    color: white;
    font-size :30px;
    text-shadow: 1px 1px 2px black;
    text-align: center;
    font-weight: bold;
    padding: 15px 0px;
`
export const RangeInput = styled('input')`
` 

export const SubmitButton = styled('button')`

`