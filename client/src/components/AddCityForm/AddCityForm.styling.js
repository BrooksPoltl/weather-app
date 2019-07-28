import styled from 'styled-components'

export const FormContainer = styled('div')`
    border: 3px solid black;
    border-radius: 8px;
    background: white;
    padding: 20px;
    width: 40%;
`

export const CityForm = styled('form')`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 30px 0px;
`

export const InputLabel = styled('label')`
    display: block;
    align: left;
    font-weight: bold;
    margin: 10px 0px;
`

export const RangeInputContainer = styled('div')`
    display: flex;
    flex-direction:row;


`
export const RangeInput = styled('input')`
    width: 100%;
    border: 2px solid black;
    border-radius: 2px;
    height: 18px;
    margin-right: 3px;
    padding: 3px;
`
export const RangeSymbol = styled('div')`
    font-weight: bold;
`
export const CityInput = styled('input')`
    width: calc(100% - 28px);
    height: 18px;
    border: 2px solid black;
    border-radius: 2px;
    padding: 3px;
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
export const InputWrapper = styled('div')`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
`