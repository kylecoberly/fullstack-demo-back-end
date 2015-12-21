var express = require("express");
var app = express();

var students = [{
    id: 1,
    first_name: "Kyle",
    last_name: "Coberly",
    date_of_birth: "01/01/1901",
    email: "kyle.coberly@galvanize.com"
},{
    id: 2,
    first_name: "Danny",
    last_name: "Fritz",
    date_of_birth: "01/01/2901",
    email: "danny.fritz@galvanize.com"
}];

app.get("/students", function(request, response){
    response.send({students: students});
});
app.get("/students/:id", function(request, response){
    response.send({students: students[request.params.id - 1]});
});

app.listen(8000, function(){
    console.log("Running on port 8000");
});
