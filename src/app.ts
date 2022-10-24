import "reflect-metadata"
import "express-async-errors"
import express from "express"
import appErrorMiddleware from "./middlewares/appErrorMiddleware"
import appRoutes from "./routes"

const app = express()

app.use(express.json())

appRoutes(app)

app.use(appErrorMiddleware)

app.listen(5000, () => {
    console.log("server running on port 5000")
})