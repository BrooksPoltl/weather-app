
module.exports = {
    checkValid:(data, setValid, setErrorMessage)=>{
        data.minimum = Number(data.minimum)
        data.maximum = Number(data.maximum)
        if(!data.city){
            return setValid(true)
        }
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
        return setValid(false)
    }
}
