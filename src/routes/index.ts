import { Express } from "express";
import loginRoute from "./loginRoute";
import userRouter from "./userRoutes";

const appRoutes = (app: Express) => {
    app.use("/users", userRouter)
    app.use("/login", loginRoute)
}

export default appRoutes