const jwt =require("jsonwebtoken")

const generateToken=data=>{
    const token=jwt.sign({data},'secretkey')
    return token
}

const authenticateToken=(req,res,next)=>{
    if(req.headers.cookie){
        const token =req.headers.cookie.split("=")[1]
        const decode=jwt.verify(token,'secretkey')
        req.usedata=decode
        next()
    }else{
        req.usedata={"massage":"token not found"}
        next()
    }
}

module.exports={generateToken,authenticateToken}