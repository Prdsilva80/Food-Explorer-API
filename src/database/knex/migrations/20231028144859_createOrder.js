exports.up = knex => knex.schema.createTable("orders", table => {
    table.increments("id")
    table.integer("user_id").references("id").inTable("users")
    
    table.timestamp("create_at").default(knex.fn.now())
    table.timestamp("updated_at").default(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable("orders")
