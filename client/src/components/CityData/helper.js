export const handleColor = (props, setColor) =>{
    if(props.city.range[0]<= props.city.temperature && props.city.temperature<= props.city.range[1]){
        return setColor("black");
    }
    else if (props.city.range[0] > props.city.temperature){
        let difference = props.city.range[0] - props.city.temperature;
        if(difference > 20){
            return setColor("#0055AA");
        }
        else if(difference > 10){
            return setColor("blue");
        }
        else{
            return setColor("#CBF3F0");
        }
    }
    else{
        let difference = props.city.temperature - props.city.range[1];
        if(difference > 20){
            return setColor("red");
        }
        else if(difference > 10){
            return setColor("orange");
        }
        else{
            return setColor("#FFBF69");
        }
    }
}