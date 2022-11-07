import "reflect-metadata"
import "express-async-errors"
import express from "express"
import appErrorMiddleware from "./middlewares/appErrorMiddleware"
import appRoutes from "./routes"


const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

appRoutes(app)

app.use(appErrorMiddleware)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`server running ${PORT}`)
})