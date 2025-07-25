//Express routes for entrees
const express = require("express");
const database = require("./connect");
const ObjectId = require("mongodb").ObjectId;

let entreesRoutes = express.Router();

//#1 - Retrieve All
entreesRoutes.route("/entrees").get(async (request, response) => {
    let db = database.getDB();
    let data = await db.collection("entrees").find({}).toArray();
    
    if (data.length > 0) {
        response.json(data);
    } else {
        throw new Error("Data was not found : ");
    };

});

//#2 - Retrieve One
entreesRoutes.route("/entrees/:id").get(async (request, response) => {
    let db = database.getDB();
    let data = await db.collection("entrees").findOne({_id: new ObjectId(request.params.id)});

    if(Object.keys(data).length > 0) {
        response.json(data);
    } else {
        throw new Error(" was not found : ");
    }
});

//#3 - Create One
entreesRoutes.route("/entrees").post(async (request, response) => {
    let db = database.getDB();

    //document schema
    let mongoObject = {
        title: request.body.title,
        description: request.body.description,
        ingredient1: request.body.ingredient1,
        ingredient2: request.body.ingredient2,
        ingredient3: request.body.ingredient3,
        instructions: request.body.instructions
    };

    let data = await db.collection("entrees").insertOne(mongoObject);
    response.json(data);
});

//#4 - Update One
entreesRoutes.route("/entrees/:id").put(async (request, response) => {
    let db = database.getDB();

    //document schema
    let mongoObject = {
        $set: {
        title: request.body.title,
        description: request.body.description,
        ingredient1: request.body.ingredient1,
        ingredient2: request.body.ingredient2,
        ingredient3: request.body.ingredient3,
        instructions: request.body.instructions
        }
    };

    let data = await db.collection("entrees").updateOne({_id: new ObjectId(request.params.id)}, mongoObject);
    response.json(data);
});

//#5 - Delete One
entreesRoutes.route("/entrees/:id").delete(async (request, response) => {
    let db = database.getDB();
    let data = await db.collection("entrees").deleteOne({_id: new ObjectId(request.params.id)}).toArray();
    response.json(data);
});

module.exports = entreesRoutes;