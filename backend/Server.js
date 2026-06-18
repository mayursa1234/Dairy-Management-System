const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
require("dotenv").config();

const authRoutes=require("./routes/authRoutes");
const productRoutes=require("./routes/productRoutes");
const orderRoutes=require("./routes/orderRoutes");

const app=express();

//middlewares
app.use(express.json());
app.use(cors());


//mongoose connection
mongoose
.connect(process.env.MONGO_URI)
.then(()=>console.log("Connected to MongoDB"))
.catch((err)=>console.log(err));

//routes
app.use("/api/auth",authRoutes);
app.use("/api/products",productRoutes);
app.use("/api/orders",orderRoutes);

app.use("/api/products",productRoutes);
app.use("/api/orders",orderRoutes);

app.get("/",(req,res)=>{
    res.send("Dairy Management System API Running");
})

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
}
);

module.exports=app;

