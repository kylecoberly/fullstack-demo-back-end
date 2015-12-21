var express = require("express");
var cors = require("cors");
var knex = require("knex")({
    client: "pg",
    connection: {
        host     : "127.0.0.1",
        user     : "regly_app",
        password : "regly_password",
        database : "regly"
    }
});

var app = express();
app.use(cors());

app.get("/students", function(request, response){
    knex("student").select().then(function(students){
        response.send({students: students});
    });
});
app.get("/students/:id", function(request, response){
    knex("student").select()
        .where("id", request.params.id)
        .then(function(students){
        response.send({students: students});
    });
});

app.listen(8000, function(){
    console.log("Running on port 8000");
});
