import React from 'react';


const NavBar = (props) =>{
    return(
        <div style = {{border: '1px solid red', color: 'red',display: "flex", justifyContent: "space-between", margin: "20px 0px"}}>
            <h1>Weather Tracker</h1>
            <a>Logout</a>
        </div>
    )
}

export default NavBar;