import { Express } from "express";
import loginRoute from "./loginRoute";
import userRouter from "./userRoutes";
import announcementRouter from "./announcementRoute";

const appRoutes = (app: Express) => {
    app.use("/users", userRouter)
    app.use("/login", loginRoute)
    app.use("/announcement", announcementRouter)
}

export default appRoutes