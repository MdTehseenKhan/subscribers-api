import express from "express"
import subscribersRouter from "./routes/subscribers.js"

import "./db.js"

const app = express()
const PORT = 3000

app.get('/', (req, res) => res.redirect('/subscribers'))
app.use('/subscribers', subscribersRouter)

app.listen(PORT, () => console.log(`Listening to the port ${PORT}...`))
