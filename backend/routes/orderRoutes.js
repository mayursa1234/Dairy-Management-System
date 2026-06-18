const express=require("express");
const router=express.Router();

const {
    createOrder,
    getAllOrders,
    getSingleOrder,
} = require("../controllers/orderController");

const protect=require("../middleware/authMiddleware");

router.post("/",protect,createOrder);
router.get("/",protect,getAllOrders);
router.get("/:id",protect,getSingleOrder);

module.exports=router;