import styled from 'styled-components';


export const HeaderContainer = styled('div')`
    border: 1px solid white;
    background: #013d79;
    color: white;
    text-shadow: 1px 1px 2px black; 
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    
`
export const AppName = styled('h1')`
    font-size: 40px;
    margin: 20px 20px 20px 20px;
`
export const Description = styled('p')`
    padding: 40px;
`