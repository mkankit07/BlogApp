require("dotenv").config()
const express=require("express")
const app=express()
const port =process.env.port
const home=require("./routes/login_signup")
const home1=require("./routes/index")
const home2=require("./routes/blogs")
const home3=require("./routes/likeDislike")
app.use(express.json())
app.use("/",home1)
app.use("/",home)
app.use("/",home2)
app.use("/",home3)
app.get("/",(req,res)=>{
    res.send("server connecting")
})

app.listen(port,()=>{
    console.log(`server connecting port No ${port}`);
})