
exports.up = function(knex) {
    return knex.schema.createTable('cityData', tbl =>{
        tbl.increments();
        tbl.integer('user_id').unsigned();
        tbl.foreign('user_id')
        .references('users.id')
        .onDelete('CASCADE')
    })
    
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cityData')
};
