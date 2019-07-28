import React from 'react';


const LoginOptions = (props) =>{
    return (
        <div>
            <div>
                <p>Don't have an account? </p>
                <button onClick = {()=> props.history.push('/')}>signup</button>
            </div>
            <div>
                <p>Don't want to login?</p>
                <button onClick = {()=> props.history.push('/dashboard')}>continue</button>
            </div>
        </div>
    )
}

export default LoginOptions;