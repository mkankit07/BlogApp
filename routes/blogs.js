const express =require('express')
const knex =require('../database/index')
const {generateToken,authenticateToken}=require('../auth/index')
const router=express.Router()


router.get("//",(req,res)=>{
    res.send("blog file connecting")
})


router.post("/insertblog",authenticateToken,(req,res)=>{
    knex("data").insert(req.body).then((data)=>{
        res.send({Massage:"data inrest "})
    }).catch((err)=>{
        res.send(err.massage)
    })

})

router.put("/updateblog/:id",authenticateToken,(Req,res)=>{
    knex.select("*").from("data").where('id',req.parmas.id).update(req.body).then((data)=>{
        res.send({masssage:"data update"})
    }).catch((err)=>{
        res.send(err.masssage)
    })
})


router.delete("/deleteblog/:id",authenticateToken,(Req,res)=>{
    knex.select("*").from("data").where('id',req.parmas.id).del().then((data)=>{
        res.send({masssage:"data update"})
    }).catch((err)=>{
        res.send(err.masssage)
    })
})


router.get("getballlog",authenticateToken,(Req,res)=>{
    knex.select("*").from("data").then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err.masssage)
    })
})


module.exports=router