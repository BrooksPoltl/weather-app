import styled from 'styled-components'

export const FormContainer = styled('div')`
    border: 1px solid white;
    background: #013d79;
    color: white;
    text-shadow: 1px 1px 2px black; 
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.4), 0px 2px 2px 0px rgba(0,0,0,0.4), 0px 3px 1px -2px rgba(0,0,0,0.4);
    border-radius: 8px;
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
    margin: 15px;
    border: none;
    border-radius: 5px;
    background: white;
    font-weight: bold;
`

export const InputWrapper = styled('div')`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
`

export const LoadingIcon = styled('i')`
    margin-top: 20px;
    font-size: 25px;
`

export const ErrorText = styled('p')`
    color: red;
    text-align: center;
`