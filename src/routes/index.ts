import { Express } from "express";
import addressRouter from "./addressRoutes";
import commentRouter from "./commentRoutes";
import loginRouter from "./loginRoute";
import publicationRouter from "./publicationRoutes";
import userRouter from "./userRoutes";
import announcementRouter from "./announcementRoute";

const appRoutes = (app: Express) => {
    app.use("/users", userRouter)
    app.use("/login", loginRouter)
    app.use("/address", addressRouter)
    app.use("/publications", publicationRouter)
    app.use("/comments", commentRouter)
}

export default appRoutes