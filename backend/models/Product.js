const mongoose=require("mongoose");

const productSchema=new.mongooseSchema({
    projectName:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    stocks:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
    },
  },
  
  {  timestamps:true }

);

module.export=mongoose.model("Product",productSchema);