var db = require("../models");

module.exports = function(app) {

  app.get("/", function(req, res) {
    db.newburger.findAll().then(function(results) {
      var burgerObject = {
        burgers: results
      };
      res.render("index", burgerObject);
    });
  });

  app.get("/api/burgers", function(req, res) {
    db.newburger.findAll().then(function(results) {
      res.json(results);
    });
  });

  app.post("/api/burgers", function(req, res) {
    
    db.newburger.create({
      burger_name: req.body.burger_name
    }).then(function(results) {
      res.end();
    });
    
  });

  app.put("/api/burgers/:id", function(req, res) {
    
    db.newburger.update({
      devoured: true
    }, {
      where: { id: req.params.id }
    
    }).then(function(results) {
      res.end();
    });
    
  });
};