module.exports=function(app){
    app.get("/home",(req,res)=>{
        res.send("Esta es la ruta de la vista HOME");
    });
}