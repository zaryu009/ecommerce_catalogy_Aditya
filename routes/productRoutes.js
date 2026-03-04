import express from "express";

import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
} from "../controllers/productController.js";

const router = express.Router();

router.post("/product", createProduct);          // CREATE
router.get("/products", getProducts);            // READ ALL
router.get("/product/:id", getProductById);      // READ ONE
router.put("/product/:id", updateProduct);       // UPDATE
router.delete("/product/:id", deleteProduct);    // DELETE

export default router;