import styled from 'styled-components'

export const LabelContainer = styled('div')`
    display: flex;
    border: 1px solid red;
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);
    margin-top: 20px;
    border-radius: 10px 10px 0px 0px;
    background: white; 
    justify-content: space-between;
    padding: 0px 100px 0px 30px;
`
export const LabelHeader = styled('h1')`
    font-size: 50px;
    font-weight: bold;
    margin: 20px 0px;
`
export const DescriptiveText = styled('p')`
    font-weight: bold;
    margin: 20px 0px 10px 0px;
    width: 15%;
    vertical-align: middle;
`

export const CitiesLabels = styled('h2')`
    font-weight: bold;
    font-size: 30px;
    margin: 20px 0 px;
    color: white;
`