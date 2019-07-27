const express = require('express');
const router = express.Router();
const axios = require('axios');
const helper = require('../helpers/weatherHelper')

router.get('/api/weather/:city', (req, response)=>{
    const city = req.params.city;
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}`)
            .then(res => {
                console.log(res)
                const temperature = helper.convertToFahrenheit(res.data.main.temp);

                response.status(200).json({temperature, coords: res.data.coord})
            })
            .catch(err => {
                response.status(500).json({errorMessage: "could not get city data"})
        })
})


module.exports = router;