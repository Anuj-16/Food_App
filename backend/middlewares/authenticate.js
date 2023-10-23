var jwt = require('jsonwebtoken');

const authenticate=(req,res,next)=>{
    const token=req.headers.authorization.split(" ")[1]
    // console.log(token)
    jwt.verify(token, 'shhhhh', function(err, decoded) {
        if(err){
            console.log("Invalid token")
            res.send("Token in invalid")
        }else{
            // console.log(decoded)
            const {userid}=decoded
            // console.log(userid)
            req.userid=userid
            next()
        }
      });
}

module.exports={
    authenticate
}