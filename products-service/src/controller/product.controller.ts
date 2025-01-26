import { Request, Response } from "express"
import { addProduct } from "../services/product.service";
class ProductController {

  constructor() { }

  async getProducts(req: Request, res: Response) {
    try {
      res.send({ products: [] })
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  }

  async addProduct(req: Request, res: Response) {
    try {
      const data = await addProduct(req.body);
      res.send({ message: "Product added successfully", product: data })
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  }

}

export default ProductController;
