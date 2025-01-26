import express from "express"
import authMiddleware from "../middleware/auth.middleware";
import ProductController from "../controller/product.controller";

const router = express.Router();
const productController = new ProductController();

router.get("/", productController.getProducts)
router.post("/", authMiddleware, productController.addProduct);

export default router;