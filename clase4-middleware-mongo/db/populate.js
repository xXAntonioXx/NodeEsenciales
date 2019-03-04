const mongo = require("./connect");
const argv = require('yargs').argv;
const collection = 'stuff';
const data = require(`../resources/${collection}`);

if(argv.fill){
    mongo.connect()
        .then(db=>{
            db.collection(collection).insertMany(data,(err,result)=>{
                if(err) {console.log("Aquí está el error");throw err;};
                console.log("Se logro hacer la inserción de datos");
                mongo.disconnect();
            });
        });
    return ;
}

if(argv.clear){
    mongo.connect()
        .then(db=>{
            db.collection(collection).drop((err,result)=>{
                if(err) throw err;
                console.log("Se elimino el JSON correctamente");
                mongo.disconnect();
            });
        });
    return ;
}