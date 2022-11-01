import "reflect-metadata"
import "express-async-errors"
import express from "express"
import appErrorMiddleware from "./middlewares/appErrorMiddleware"
import appRoutes from "./routes"
import swaggerUi from "swagger-ui-express"
import swaggerDocument from "../swagger.json"

const app = express()

app.use(express.json())

app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocument))

appRoutes(app)

app.use(appErrorMiddleware)

app.listen(5000, () => {
    console.log("server running on port 5000")

})

