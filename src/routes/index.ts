import { Express } from "express";
import addressRouter from "./addressRoutes";
import loginRouter from "./loginRoute";
import publicationRouter from "./publicationRoutes";
import userRouter from "./userRoutes";

const appRoutes = (app: Express) => {
    app.use("/users", userRouter)
    app.use("/login", loginRouter)
    app.use("/address", addressRouter)
    app.use("/publication", publicationRouter)
}

export default appRoutes