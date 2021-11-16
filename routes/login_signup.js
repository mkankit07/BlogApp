const express=require("express")
const knex=require("../database/index")
const bcrypt=require("bcrypt")

const {generateToken,authenticateToken}=require("../auth/index")
const router=express.Router()
router.post("/register",(req,res)=>{
    if(req.body.email===undefined || req.body.password===undefined ){
        res.send({"suggestion":"email and password both are require"})}
    else{
    knex.select("*").from("user").where({email:req.body.email}).then((data)=>{
        if(data.length<1){
            knex("user").insert({name:req.body.name,email:req.body.email,password:bcrypt.hashSync(req.body.password,10)}).then((data)=>{
                res.send({'massage':'data insert'})
            }).catch((err)=>{
                res.send(err.massage)
            })
        }else{
            res.send("data already exist")
        }
    })
}
})

router.post('/login',(req,res)=>{
    if(req.body.email===undefined ||req.body.password===undefined){
        res.send({"massage":"email and possword both are require"})
    }else{
        knex.select("*").from("user").where('email',req.body.email).then((data)=>{
        const password=bcrypt.compareSync(req.body.password,data[0].password)
        if (password){
            const  token=generateToken(req.body)
            res.cookie("token",token).send(data)
            console.log(token);
        }else{
            res.send('Invalid  password') }
        }).catch((err)=>{
            res.send({massage:"Invalid email"})
        })
    }
})


module.exports=router

