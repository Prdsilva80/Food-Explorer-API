exports.up = knex => knex.schema.createTable("meals", table => {
    table.increments("id")
    table.text("name")     
    table.text("category")
    table.text("price")
    table.text("description")
    table.text("avatar")
    table.timestamp("create_at").default(knex.fn.now())
    table.timestamp("updated_at").default(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable("meals")
