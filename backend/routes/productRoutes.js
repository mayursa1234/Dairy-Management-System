const express=require("express");
const router=express.Router();

const {
    addProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
} = require("../controllers/productController");

const protect=require("../middleware/authMiddleware");
const adminOnly=require("../middleware/adminMiddleware");


router.post("/",protect,adminOnly,addProduct);
router.get("/",getAllProducts);
router.get("/:id",getSingleProduct);
router.put("/:id",protect,adminOnly,updateProduct);
router.delete("/:id",protect,adminOnly,deleteProduct);

module.exports=router;