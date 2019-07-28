const express = require('express');
const knex = require('knex');
const router = express.Router();
const helper = require('../helpers/cityDataHelper');
const auth = require('../helpers/authHelper');
const lock = auth.lock;
const axios = require('axios');
const weatherHelper = require('../helpers/weatherHelper');

router.post('/citydata',lock, (req,res)=>{
    const body = req.body;
    console.log(body)
    console.log(req)
    const cityData = {user_id: req.decodedToken.id, city: body.city, minimum: body.range[0], maximum: body.range[1]};
    console.log(cityData)
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityData.city}&appid=${process.env.WEATHER_API_KEY}`)
            .then(test => {
                helper.addCity(cityData).then (result => {
                    res.status (201).json (result);
                    }).catch (err => res.status (500).json ({errorMessage:'error adding city'}));
            })
            .catch(err => {
               return  res.status(500).json({errorMessage: "could not get city data"})
        })
   
});

router.get('/citydata',lock, async(req,res)=>{
    const getCities  = await helper.findCities(req.decodedToken.id)
    const inRangeCities = [];
    const notInRangeCities = [];
    for(let i = 0; i< getCities.length; i++){
  
        const city = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${getCities[i]["city"]}&appid=${process.env.WEATHER_API_KEY}`).then(res=>{
            let temp = res.data.main.temp;
            temp = weatherHelper.convertToFahrenheit(temp)
            if(temp>= getCities[i]["minimum"]&& temp<= getCities[i]["maximum"]){
                inRangeCities.push({id: getCities[i]["id"],range: [getCities[i]["minimum"], getCities[i]["maximum"]], temp, inRange:true})
            }else{
                notInRangeCities.push({id: getCities[i]["id"],range: [getCities[i]["minimum"], getCities[i]["maximum"]], temp, inRange:false})
            }
        }).catch(err=>{
            console.log(err)
        })
    }   
    return res.status(200).json( {inRangeCities, notInRangeCities})
})

router.put('/citydata/:id', lock,(req,res)=>{
    helper.updateRange(req.params.id, req.body.range).then(response=>{
        res.status(200).json({message: "range has been updated"});
    }).catch(err=>{
        console.log(err)
        res.status(500).json({message: "could not update post"});
    })
})
module.exports = router;