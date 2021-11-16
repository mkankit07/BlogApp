const express=require("express")
const {generateToken,authenticateToken}=require('../auth/index')
const knex= require("../database/index")
const router=express.Router()

router.get('/a',(req,res)=>{
    res.send("connecting")
})


router.post("/dataInsert",authenticateToken,(req,res)=>{
    knex("likeDislike").insert(req.body).then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send("asssdad")
    })
})


router.put("/like/:id",authenticateToken,(req,res)=>{
    knex.select("*").from('likeDislike').where({
        user_Id:req.body.user_Id,
        like:req.body.like,
        Dislike:false
    }).then((data)=>{
        res.send(dat)
    })
})

router.put("/Dislike/:id",authenticateToken,(req,res)=>{
    knex.select("*").from('likeDislike').where({id:req.params.id,}).update({
        user_ID:req.body.user_ID,
        like:false,
        Dislike:req.body.Dislike  
    })
    .then((data)=>{
        res.send('daa update')
    })
})


module.exports=router