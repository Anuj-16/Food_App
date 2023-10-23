const express=require("express")
const connection=require("./connection/connect")
const bcrypt = require('bcrypt');
const { UserModel } = require("./models/UserModel");
var jwt = require('jsonwebtoken');
const { authenticate } = require("./middlewares/authenticate");
const { TodoModel } = require("./models/TodoModel");
const cors = require('cors')


const app=express()
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.send("Base api")
})

// Login and Signup

app.post("/signup",async(req,res)=>{
    const {name,email,password}=req.body
   
    bcrypt.hash(password, 5, async function(err, hash) {
       await  UserModel.create({name,email,password:hash})
       res.send("Signed up Succesfully")
    });

   
})


app.post("/login",async(req,res)=>{
    const {email,password}=req.body
    const user=await UserModel.findOne({email})
    const hash=user.password
    if(user){
        bcrypt.compare(password, hash, async function(err, result) {
            // result == true
            if(result){
                // var token = jwt.sign({ userid:user._id }, 'shhhhh');
                res.send({msg:"Logged in Succesfully"})
            }
            else{
                res.send("Wrong password")
            }
        });
    }else{
        res.send("Sign up first")
    }
  
})

// Crud api part

app.use(authenticate)

app.get("/todos",async (req,res)=>{
const data=await TodoModel.find(req.query)
    res.send({data})
})


app.post("/todos/add",async (req,res)=>{
    const {taskname,status,tag}=req.body
    const userid=req.userid
    console.log(userid)
    try{
await TodoModel.create({taskname,status,tag,userid})
res.send("Todo Created")
    }catch(err){
        console.log(err)
        res.send("Not Created")
    }

})

app.put("/todos/:id",async (req,res)=>{
  const {id}=req.params
  const userid=req.userid
 const {taskname,status,tag}=req.body
//  console.log(status)
 try{
    if(id===userid){
await TodoModel.findByIdAndUpdate(id,{taskname,status,tag})
res.send("Edited Succesfully")

    }else{
        res.send("Not Authorised")
    }
 }catch(err){
    console.log(err)
    res.send("Not edited")
 }

})


app.delete("/todos/:id",async (req,res)=>{
    const {id}=req.params
    
    const userid=req.userid
    console.log(userid)
   try{
      if(id===userid){
  await TodoModel.findByIdAndDelete(id)
  res.send("Deleted Succesfully")
  
      }else{
          res.send("Not Authorised")
      }
   }catch(err){
      console.log(err)
      res.send("Not Deleted")
   }
  
  })

app.listen(8080,async()=>{
try{
await connection
console.log("Listening to port 8080")
}catch(err){
    console.log(err)
    console.log("Unable to connect")
}
})