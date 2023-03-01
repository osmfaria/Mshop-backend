import { Express } from "express";
import addressRouter from "./addressRoutes";
import commentRouter from "./commentRoutes";
import imageRouter from "./imageRouter";
import loginRouter from "./loginRoute";
import publicationRouter from "./publicationRoutes";
import userRouter from "./userRoutes";
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../../swagger.json';

const appRoutes = (app: Express) => {
    app.use("/users", userRouter)
    app.use("/login", loginRouter)
    app.use("/address", addressRouter)
    app.use("/publications", publicationRouter)
    app.use("/comments", commentRouter)
    app.use("/images", imageRouter)
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
}

export default appRoutes