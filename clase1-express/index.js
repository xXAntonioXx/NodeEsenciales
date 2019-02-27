const express = require("express");
const app = express();

require("./routes/views")(app);
require("./routes/special")(app);

console.log("Iniciando en servidor...");
app.listen(3000,()=>{
    console.log("servidor operando en el puerto 3000");
});