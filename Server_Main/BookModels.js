const mongoose = require("mongoose");

const URL = "mongodb+srv://akhiyaarmuhammed123:ijazki@cluster0.drcqspm.mongodb.net/?retryWrites=true&w=majority";
const KEY = "AKHIYAAR6776"

mongoose.connect(URL);
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    publicationDate:{
        type:String,
        require:true
    },
    genre:{
        type:String,
        require:true,
    },
    isbnNo:{
        type:String,
        require:true
    },
    comments:{
        type:[
                {
                    username:String,
                    comment:String
                }
            ],
        default:null
    },
    image:{
        type:Buffer,
        default:null
    },
    avai:{
        type:Boolean,
        default:true
    }

},
{
    timestamps:true
}
);

const BookModel = mongoose.model("BookData", bookSchema);

module.exports = BookModel;