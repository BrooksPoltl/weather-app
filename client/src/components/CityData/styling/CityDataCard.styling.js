import styled from 'styled-components';

export const CardContainer = styled('div')`
    border: 2px solid black;
    display: flex;
    justify-content: space-between;
    padding: 0px 100px 0px 30px;
    height: 40px;
    background: white;
`
export const TemperatureText = styled('p')`
    font-weight: bold;
    line-height: 36px;
    width: 15%;
    text-align: center;
    color: ${props => props.color? props.color:"black"}
    font-size: ${props => props.color? "20px":"16px"}
    -webkit-text-stroke-width: ${props =>props.color && props.color !== "black"?"1.5px":"0px"};
    -webkit-text-stroke-color: black;
`
export const CityText = styled('p')`
    fontWeight: bold; 
    width: 15%;
    lineHeight: 36px;
`
export const RangeInput = styled('input')`
    width: 15%;
    text-align: center;
` 

export const SubmitButton = styled('button')`
    position: absolute;
    right: calc(10% + 25px);
    width: 70px;
    height: 35px;
`