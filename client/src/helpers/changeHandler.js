

const changeHandler = (event,data, setter) =>{
    if(!event.target.validity.valid){
        return false
    }
    const value = event.target.value;
    setter({...data, [event.target.name]: value})
}

export default changeHandler