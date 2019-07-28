import React from 'react';


const Registered = (props) =>{
    console.log(props)
    return (
        <div>
            <p>Thank you for registering, click here to login</p>
            <button onClick = {()=>props.history.push("/login")}>Login</button>
        </div>
    )
}

export default Registered;
