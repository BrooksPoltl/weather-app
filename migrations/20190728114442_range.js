
exports.up = function(knex) {
    return knex.schema.createTable('range', tbl =>{
        tbl.increments();
        tbl.integer('cityData_id').unsigned();
        tbl.foreign('cityData_id')
        .references('cityData.id')
        .onDelete('CASCADE')
        tbl.integer('temperature').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('range')
};
