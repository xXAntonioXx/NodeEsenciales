const API_PATH = "/api";
const films = require("../../resources/stuff");

module.exports = (app) => {
    app.get(`${API_PATH}/films`,(req,res)=>{
        res.json(films)
    });
}