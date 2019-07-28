const knex = require('knex');
const knexConfig = require('../../knexfile')
const db = knex(knexConfig.development)


module.exports ={
    addCity: function(city){
        return db.insert(city).into('cityData')
    },
    findCities: function(id){
        return db('cityData').where({user_id: id})
    },
    updateRange: function(id,range){
        return db('cityData').where({id}).update({minimum: range[0], maximum: range[1]})
    },
    deleteCity: function(id){
        return db('cityData').where({id}).del()
    }
}