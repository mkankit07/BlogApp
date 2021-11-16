const express=require("express")
const knex =require("../database/index")
const {authenticateToken}=require('../auth/index')
const bcrypt=require('bcrypt')
const router=express.Router()


router.put('/update/:id',authenticateToken,(req,res)=>{
        knex.select("*").from('user').where({id:req.params.id}).update({name:req.body.name,password:bcrypt.hashSync(req.body.password,10)}).then((data)=>{
            res.send({massage:"data update"})
        }).catch((err)=>{
            res.send(err.massage)
        }) 
})

router.delete("/del/:id", authenticateToken, (req, res) => {
    knex.select("*").from("user").where({ 'id': req.params.id }).del().then((data) => {
        res.send("data delete")
    }).catch((err) => {
        res.send(err.massage)
    })
})

module.exports=router