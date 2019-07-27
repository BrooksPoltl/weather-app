module.exports = {
    convertToFahrenheit:(kelvin)=>{
        let temperature = (9/5) * (kelvin - 273) + 32;
        temperature = Math.round(temperature);
        return temperature;
    }
}