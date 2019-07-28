import styled from 'styled-components'

export const FormContainer = styled('div')`
    border: 1px solid red;
    width: 40%;
`

export const CityForm = styled('form')`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
    width: 100%;
    margin: 30px 0px;
`

export const InputLabel = styled('label')`
    display: block;
`

export const RangeInputContainer = styled('div')`
    display: flex;
    flex-direction:row;
    border: 1px solid red;
    width: 150px;
`
export const RangeInput = styled('input')`
    width: 100%;

`
export const RangeSymbol = styled('div')`

`
export const CityInput = styled('input')`
    width: 150px;
`

export const FormHeader = styled('h1')`
    font-size: 40px;
    text-align: center;
`

export const FormButton = styled('button')`
    width: 100px;
    height: 25px;
    margin: 3px;
    border: none;
    border-radius: 5px;
    background: white;
    font-weight: bold;
`
export const ButtonWrapper = styled('div')`
    background: ${props => props.disabled?"Gray":"linear-gradient( to right, #FF9F1C, #0055AA)"};
    margin: 20px 0px;
    position: relative;
    border-radius: 5px;

`