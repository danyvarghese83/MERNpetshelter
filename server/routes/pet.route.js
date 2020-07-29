console.log("pet.routes.js");

const Pets = require("../controllers/pet.controller");

module.exports = app => {
    app.get("/api/pet", Pets.getAll);
    app.post("/api/pet", Pets.create);
    app.get("/api/pet/:_id", Pets.getOne);
    app.put("/api/pet/:_id", Pets.update);
    app.delete("/api/pet/:_id", Pets.remove);
}