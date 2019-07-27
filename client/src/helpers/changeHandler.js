

const changeHandler = (event,data, setter) =>{
    const value = event.target.value;
    setter({...data, [event.target.name]: value})
}

export default changeHandler