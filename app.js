const express = require('express');
const app = express()
const cors = require('cors');
const { APP_PORT } = process.env
const notFoundRoute = require('./controllers/notFound-controller');
const routes = require('./routes/index-route');

// set "CORS" config
app.use(cors())

// init routes
app.use("/api", routes)
app.use(notFoundRoute)

// launch the app
app.listen(APP_PORT, () => console.log("App is running..."))