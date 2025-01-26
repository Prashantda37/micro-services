// import axios from "axios";
import { IProduct } from "../utilities/product.interface";
import { productModel } from "../model/product.model"

export const addProduct = async (payload: IProduct) => {
  try {
    const product = new productModel(payload);
    return await product.save();
  } catch (error: any) {
    return error.message
  }
}