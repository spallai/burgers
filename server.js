var express = require('express');
var bodyParser = require('body-parser');

var db = require("./models/index.js");
db.sequelize.sync().then(function(){
    console.log("db synced");
});

var PORT = process.env.PORT || 8080;
var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/burgers_controllers.js")(app);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});