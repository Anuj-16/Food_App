const mongoose=require("mongoose")

const todoSchema=mongoose.Schema({
    taskname:{type:String,required:true},
    status:{type:String,required:true,enum:["pending","done"]},
    tag:{type:String,required:true,enum:["personal","official","family"]},
    userid:{type:String,required:true},
})

const TodoModel=mongoose.model("todo",todoSchema)

module.exports={
    TodoModel
}