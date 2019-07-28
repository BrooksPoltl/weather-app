

const changeHandler = (event,data, setter) =>{

    let value = event.target.value;
    if(Number(value)){
        value = Number(value);
    }
    setter({...data, [event.target.name]: value})
}

export default changeHandler