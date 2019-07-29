import styled from 'styled-components';


export const SignupFormStyle= styled('form')`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 30px 0px;
`
export const FormHeader = styled('h1')`
    font-size: 40px;
    text-align: center;
`

export const SignupFormButton = styled('button')`
    margin: 20px 0px;
    width: 100px;
    height: 30px;
    background: white;
    border-radius: 5px;
    border: ${props=>props.disabled?"3px solid gray":"3px solid black"};
    cursor: ${props=>props.disabled? null: "pointer"}
`

export const Error = styled('p')`
    color: red;
    margin: 10px 0px;
`

export const OptionButton = styled('button')`
    border: none;
    background: white;
    font-weight: bold;
    color: blue;
    cursor: pointer;
`