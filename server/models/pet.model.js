console.log("pet.model.js");

const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
    petName: {
        type: String,
        required: [true, "Pet Name is required"],
        minlength: [3, "Pet Name must be 3 characters or longer"]
    },
    petType: {
        type: String,
        required: [true, "Pet Type is required"],
        minlength: [3, "Pet Type must be 3 characters or longer"]
    },
    petDescription: {
        type: String,
        required: [true, "Pet Description is required"],
        minlength: [3, "Pet Description must be 3 characters or longer"]
    },
    skill1:{
        type: String
        
    },
    skill2:{
        type: String
        
    },
    skill3:{
        type: String
        
    }
}, {timestamps: true});

module.exports = mongoose.model("Pet", PetSchema);