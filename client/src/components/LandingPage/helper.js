

module.exports = {
    checkValid:(data, setDisabled, setErrorMessage)=>{
        
        if(!data.username){
            return setDisabled(true);
        }
        if(!data.password){
            return setDisabled(true);
        }
        if(!data.confirmPassword){
            return setDisabled(true);
        }
        return setDisabled(false);
    }
}