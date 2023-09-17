const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const freelancerData = new Schema({
    photo: {
        type: String,
        required: true
    },
    initial: {
        type: String,
        required: true
    },
    intermediate: {
        type: String,
        required: true
    },
    final: {
        type: String, 
        required: true
    },
    birth: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    national: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    e_level: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    codep: {
        type: String,
        required: true
    },
    certified: {
        type: String,
        required: true
    },
    carriculum_v: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        unique:true,
        required: true
    }
});

module.exports = mongoose.model("Freelancer", freelancerData);