import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter product name"],
        maxLength:[200,"Product name cannot exceed 200 characters"],
    },
    price:{
        type:Number,
        required:[true,"Please enter product price"],
        maxLength:[5,"Product price cannot exceed 5 digits"],
    },
    description:{
        type:String,
        required:[true,"Please enter product description"],
    },
    ratings:{
        type:Number,
        default:0
    },
    images:[
        {
        public_id:
        {
            type:String,
            required:True,
        },
        url:{
            type:String,
            required:True,
        },
    },
    ],
    category:{

        type:String,
        required:[true,"Please enter product category"],
        enum:{
            values:[
                "Laptops",
                "Electronics",
                "Cameras",
                "Accesories",
                "Headphones",   
                "Food",
                "Books",
                "Sports",
                "Outdoor",
                "Home",
            ],
            message:"Please select correct category",

        },
    },
    seller:{
        type:String,
        required:[true,"Please enter product seller"],
    },
    stock:{
        type:String,
        required:[true,"Please enter product stock"],
    },
    numOfReviews:{
        type:Number,
        default:0,
    },
    reviews:[
        {
            user:{
                type: mongoose.Schema.Types.ObjectId,
                ref:'User',
                required:true,
        },
        rating:{
            type:Number,
            required:True,
        },
        comment:{
            type:String,
            required:True,
        },
        },
    ],
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:false,
},
createdAt:{
    type:Date,
    default:Date.nov,
},

    
},
 {timestamps :true},
);
export default mongoose.model("Product",productSchema);