import express from "express";
import { login, deleteUser, getAllUsers, signup, updateUser, getBookingsOfUser, getUser } from "../controllers/user_controller.js";
const userRouter=express.Router();

userRouter.get("/", getAllUsers);
userRouter.post("/signup", signup);
userRouter.get("/:id", getUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.post("/login", login);
userRouter.get("/bookings/:id", getBookingsOfUser);
<<<<<<< HEAD

export default userRouter;
=======
export default userRouter;
>>>>>>> 0b49a905c2944d355b641678bacf8559d4fcab1c
