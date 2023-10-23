const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb+srv://anshulgusain99:toHQb6WPDatPtkq2@cluster0.vwiwavz.mongodb.net/sprint3")

module.exports={
    connection
}