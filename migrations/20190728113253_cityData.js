
exports.up = function(knex) {
    return knex.schema.createTable('cityData', tbl =>{
        tbl.increments();
        tbl.integer('user_id').unsigned();
        tbl.string('city',255).notNullable().unique();
        tbl.integer('minimum').unsigned();
        tbl.integer('maximum').unsigned();
    })
    
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cityData')
};
