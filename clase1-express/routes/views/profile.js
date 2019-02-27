module.exports=function(app){
    app.get("/perfil/:user",(req,res)=>{
        res.send(`Esta es la vista a un PERFIL ${req.params.user}`);
    });
}