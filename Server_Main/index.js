// importing
const express = require("express");
const usermodel = require("./usermodel"); //import
const cors = require("cors");
const session = require("express-session");
const jwt = require('jsonwebtoken');
const BookModels = require("./BookModels");
const mongoose = require("mongoose");



// App Initialization
const JWT_SECRET = "DIAS12345";


// initialisation
const app =new express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())
app.use(session({
secret:'DIAS',
resave:true,
saveUninitialized:true,
cookie:{
origin:"http://localhost:3000",
credentials:true
 }
}))

mongoose.connect('mongodb+srv://akhiyaarmuhammed123:ijazki@cluster0.drcqspm.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });


//book view
app.get('/viewbook',async (req,res)=>{
 var data = await BookModels.find();
 res.status(200).send(data);
})



// API creation



// to post data
app.post('/create',async (req,res)=>{
 var Result = new usermodel(req.body);
 await Result.save();
 res.send("Data added to the database");
})


// to view data
app.get('/view',async(req,res)=>{
 var data = await usermodel.find();
 res.json(data);
})



// delete
app.delete('/delete/:id',async(req,res)=>{
 var id = req.params.id;
 await usermodel.findByIdAndDelete(id);
 res.send('deleted');
})

//view single user
app.get("/singlebook/:id", async (req, res) => {
  try {
    //if (!user.access) return res.status(403).send("Access Denied")
    const { id } = req.params;
    const data = await BookModels.findById(id);
    res.send(data);
  } catch (error) {
    console.error(error);
    res.send("Unable to fetch data");
  }
});

// port
app.listen(4000,()=>{
console.log("Its Running...");
})

//login
app.post("/login", async (req, res) => {
    const { EmailId, Password } = req.body;
    const admin = {
      EmailId:'admin',
      Password:'admin'
    }
    if(EmailId === admin.EmailId && Password === admin.Password ){
      return res.status(222).send({ msg:"Welcome admin", status:222})
    }
    try {
      const user = await usermodel.findOne({ EmailId });
      if (!user) {
        return res.send({ error: "User not found" });
      }
  
      if (Password == user.Password) {
        const token = jwt.sign({}, JWT_SECRET);
  
        if (res.status(201)) {
          return res.json({ status: "ok", data: token });
        } else {
          return res.json({ error: "error" });
        }
      }
  
      res.json({ status: "error", error: "Invalid Password" });
    } catch (error) {
      console.log(error);
      res.send({ status: 'error' });
    }
  });


// Book Add
app.post("/add_book", async (req, res) => {
 try{
 const book = new BookModels(req.body);
console.log(req.body)
 if(book.$isValid()){
 await book.save()
 return res.send("Book added")
}
 return res.send("Not added Book")
}
 catch(err){
 console.log(err);
}
})

//user view
app.get('/viewuser', async (req, res) => {
  try {
    const data = await usermodel.find();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.send({ status: 'error' });
  }
});

//user registration
app.post('/register', async (req, res) => {
    const { FirstName, SecondName, Age, Dob, Address, PhoneNumber,Institution, Course, EmailId, Password } = req.body;
   
    try {
      const oldUser = await usermodel.findOne({EmailId });

      if (oldUser) {
        return res.send({ error: "User Exists" });
      }
  
      await usermodel.create({
    FirstName,
    SecondName,
    Age,
    Dob,
    Address,
    PhoneNumber,
    Institution,
    Course,
    EmailId,
    Password,
      });
  
      return res.send({ status: 'ok' });
    } catch (error) {
      console.log(error);
      res.send({ status: 'error' });
    }
  });

app.get("/get_user/:id", async (req, res) => {
  const id = req.params.id;
  const u = await usermodel.findOne({ _id:id });
  return res.status(200).send(u)
})

app.put("/update", async (req, res) =>{
  const d = req.body;
  await usermodel.findOneAndUpdate({EmailId:d.EmailId}, d);
  res.send("done");
})