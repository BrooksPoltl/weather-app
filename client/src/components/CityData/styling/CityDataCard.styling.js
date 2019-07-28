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