const router = require("express").Router();
const {
  updateUser,
  deleteUser,
  getUserStatus,
  getUser,
  getUsers,
} = require("../controllers/userController");
const { checkAuth, checkAdmin } = require("../middleware/checkAuth");
router
  .route("/user/:id")
  .patch(checkAuth, updateUser)
  .delete(checkAuth, checkAdmin, deleteUser)
  .get(checkAuth, checkAdmin, getUser);
router.route("/all").get(checkAuth, checkAdmin, getUsers);
router.route("/status").get(checkAuth, checkAdmin, getUserStatus);
module.exports = router;
