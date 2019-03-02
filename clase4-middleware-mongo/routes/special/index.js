module.exports=function(app){
    app.get("*",(req,res)=>{
        res.send("Ruta no definida");
    });
}