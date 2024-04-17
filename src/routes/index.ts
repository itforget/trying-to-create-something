import express from "express";
import userRouter from "../routes/userRoute"

const router = (app: express.Router) => {
    app.use("/user", userRouter)
}

export default router