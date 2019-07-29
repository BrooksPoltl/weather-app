
module.exports = {
    checkValid:(data, setDisabled)=>{
        
        if(!data.username){
            return setDisabled(true);
        }
        if(!data.password){
            return setDisabled(true);
        }

        return setDisabled(false);
    }
}