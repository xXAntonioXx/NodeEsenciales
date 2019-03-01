const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require("./routes/views")(app);
require("./routes/special")(app);

console.log("Iniciando en servidor...");
app.listen(3000,()=>{
    console.log("servidor operando en el puerto 3000");
});