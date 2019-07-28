import React from 'react';


const LandingOptions = (props) =>{
    return(
        <div>
            <div>
                <p>Already have an account? </p>
                <button onClick = {()=> props.history.push('/login')}>login</button>
            </div>
            <div>
                <p>Don't want to login?</p>
                <button onClick = {()=> props.history.push('/dashboard')}>continue</button>
            </div>
        </div>
    )
}

export default LandingOptions;