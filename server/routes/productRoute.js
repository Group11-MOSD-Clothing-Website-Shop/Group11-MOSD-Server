const router = require("express").Router();
const { checkAuth, checkAdmin } = require("../middleware/checkAuth");
const {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getProducts,
} = require("../controllers/productController");
router.post("/new", checkAuth, checkAdmin, createProduct);
router
  .route("/product/:id")
  .patch(checkAuth, checkAdmin, updateProduct)
  .delete(checkAuth, checkAdmin, deleteProduct)
  .get(getProduct);
router.get("/all", getProducts);

module.exports = router;
