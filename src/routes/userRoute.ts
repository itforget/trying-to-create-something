import express from "express";
import UserController from "../controller/userController";

const router = express.Router();

const userController = new UserController();

router.post("/", userController.addUser);
router.get("/", userController.listUsers);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

export default router;