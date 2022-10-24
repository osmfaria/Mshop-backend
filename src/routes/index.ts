import { Express } from "express";
import addressRouter from "./addressRoutes";
import loginRoute from "./loginRoute";
import userRouter from "./userRoutes";

const appRoutes = (app: Express) => {
    app.use("/users", userRouter)
    app.use("/login", loginRoute)
    app.use("/address", addressRouter)
}

export default appRoutes