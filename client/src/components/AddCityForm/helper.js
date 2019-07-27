
module.exports = {
    checkValid:(data, setValid, setErrorMessage)=>{
        
        if(!data.minimum){
            return setValid(true)
        }
        if(!data.maximum){
            return setValid(true)
        }
        if(data.minimum > data.maximum){
            setErrorMessage("minimum cannot be greater than maximum");
            return setValid(true)
        }
        setErrorMessage("");
        if(!data.city){
            return setValid(true)
        }
        return setValid(false)
    }
}
