var db = require("../models");

module.exports = function(app) {
  // Get all Tacos
  app.get("/api/Tacos", function(req, res) {
    db.Taco.findAll({}).then(function(dbTacos) {
      res.json(dbTacos);
    });
  });

  // Create a new Taco
  app.post("/api/Tacos", function(req, res) {
    db.Taco.create(req.body).then(function(dbTaco) {
      res.json(dbTaco);
    });
  });

  // Delete an Taco by id
  app.delete("/api/Tacos/:id", function(req, res) {
    db.Taco.destroy({ where: { id: req.params.id } }).then(function(dbTaco) {
      res.json(dbTaco);
    });
  });
};