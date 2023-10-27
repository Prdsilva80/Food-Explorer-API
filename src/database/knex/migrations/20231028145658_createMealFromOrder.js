exports.up = knex => knex.schema.createTable("mealsfromorder", table => {
    table.increments("id")
    table.integer("order_id").references("id").inTable("orders").onDelete("CASCADE")
    table.integer("user_id").references("id").inTable("users")
    table.text("name").notNullable()
})

exports.down = knex => knex.schema.dropTable("mealsfromorder")
