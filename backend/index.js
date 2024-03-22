const express = require("express");
const bodyParser = require("body-parser");

require('dotenv').config();

const app = express();
const routes = require("./routes");

app.use(bodyParser.json());
app.use('/', routes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
});