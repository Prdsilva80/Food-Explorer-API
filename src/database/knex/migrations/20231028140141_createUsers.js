exports.up = knex => knex.schema.createTable("users", table => {
    table.increments("id")
    table.text("name")     
    table.text("email") 
    table.text("password")
    table.bool("is_admin").nullable()
    table.timestamp("create_at").default(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable("users")
