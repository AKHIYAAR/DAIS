// importing
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://akhiyaarmuhammed123:ijazki@cluster0.drcqspm.mongodb.net/?retryWrites=true&w=majority");

// schema creation
let Schema = mongoose.Schema;

const userSchema = new Schema({
   FirstName:String,
   SecondName:String,
   Age:Number,
   Dob:String,
   Address:String,
   PhoneNumber:Number,
   Institution:String,
   Course:String,
   EmailId:String,
   Password:String,
   blocked:Boolean
});

// model creation

var usermodel = mongoose.model("User",userSchema);

// export
module.exports = usermodel;