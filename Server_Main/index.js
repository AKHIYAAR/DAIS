// importing
const express = require("express");
const usermodel = require("./usermodel"); //import
const cors = require("cors");
const session = require("express-session");
const BookModels = require("./BookModels");
const BookModel = require("./BookModels");


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





// port
app.listen(4000,()=>{
    console.log("Its Running...");
})



// login
app.post("/login", async (req,res) => {
    if(req.session.user){
        return res.send("Already loged in.")
    }
    console.log(req.body);
    try{
        const user = await usermodel.findOne({EmailId:req.body.EmailId});
        if (!user){
            return res.send("No user Found");
        }
        if(user.Password === req.body.Password){
            req.session['user'] = user;
            console.log(req.session.user);
            return res.send("loged in");
        }
        else{
            res.send("Invalid password");
        }
    }
    catch(err){
        console.log(err);
        res.send("Server error");
    }
})

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
