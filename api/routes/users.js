import express from "express";
import getUsers, {
  addUsers,
  deleteUser,
  updateUser,
} from "../controllers/user.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", addUsers);
router.put("/", updateUser);
router.delete("/", deleteUser);

export default router;
