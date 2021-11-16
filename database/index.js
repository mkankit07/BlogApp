require('dotenv').config()
const knex=require("knex")({
    client:"mysql",
    connection:{
        host:process.env.host,
        user:process.env.user,
        password:process.env.password,
        database:process.env.database
    }
})
knex.schema.createTable("user",(table)=>{
    table.increments("id")
    table.string("name")
    table.string("password")
    table.string("email")
}).then((data)=>{
    console.log({massage:"table create"})
}).catch((err)=>{
    console.log({massage:"table already create"})})


knex.schema.createTable("data",(table)=>{
    table.increments("id").primary()
    table.string("title")
    table.string('author')
    table.string("desciption")
}).then((data)=>{
    console.log({massage:"table create"});
}).catch((err)=>{
    console.log({massage:"table already create"});
})


knex.schema.createTable("likeDislike",(table)=>{
    table.increments("id").primary()
    table.integer("user_ID")
    table.boolean('like').notNullable()
    table.boolean('Dislike').notNullable()
}).then((data)=>{
    console.log({massage:"table create"});
}).catch((err)=>{
console.log({massage:"table already created"});
})

module.exports=knex