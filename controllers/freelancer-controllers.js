const freelancer = require("../models/freelancer");
const path = require("path");
const getAllFreelancer = async (req, res, next) => {
    let freelancers;
    try {
        freelancers = await freelancer.find();
    } catch (err) {
        return res.status(404).json({
            message: "No Freelancer found yet",
            err: err.message
        });
    }
    return res.status(200).json({
        message: " Action Success",
        freelancers
    });
};

const newfreelancer = async (req, res, next) => {
    const { initial, intermediate, final, birth, gender, national, experience, e_level, location, codep, contact } = req.body;
    const { certificate, cv, face_pic } = req.files;
    
    let certified = `Certificates/${certificate[0].filename}`;
    let carriculum_v = "Carriculums/"+cv[0].filename;
    let photo = `Profiles/${face_pic[0].filename}`;

    const newFreelancer = new freelancer({
        photo,
        initial,
        intermediate,
        final,
        birth,
        gender,
        national,
        experience,
        e_level,
        location,
        codep,
        certified,
        carriculum_v,
        contact
    });

    try {
        await newFreelancer.save();
    } catch (err) {
        return res.status(400).json({
            message: "Unable to Save",
            err: err.message
        });
    }

    return res.status(200).json({
        message: "Action Success",
        newFreelancer
    });
};

const updateFreelancer = async (req, res, next) => {
    const theId = req.params.theid;
    const {
        photo,
        national,
        experience,
        e_level,
        location,
        codep,
        certified,
        carriculum_v,
        contact
    } = req.body;

    let updatefreelancer;
    try {
        if (updatefreelancer) {
            updatefreelancer = await freelancer.findByIdAndUpdate(theId, {
                photo,
                national,
                experience,
                e_level,
                location,
                codep,
                certified,
                carriculum_v,
                contact
            });
        } else {
            return res.status(404).json({
                message: "Undifined Action, User not found"
            })
        }
    } catch (err) {
        return res.status(400).json({
            message: "Unable to Save",
            err: err.message
        });
    }

    return res.status(200).json({
        message: "Action Success",
        updatefreelancer
    })
}
const deleteFreelancer = async (req, res, next) => {
    const id = req.params.lancerid;
    let deleted_user;
    try {
        deleted_user = await freelancer.findByIdAndDelete(id);
    } catch (err) {
        return res.status(400).json({
            message: "unable to DELETE user",
            err: err.message
        });
    }

    return res.status(200).json({
        message: "Action Success, User Deleted ",
        deleted_user
    });
}
const singleApplied = async (req, res, next) => {
    const id = req.params.applier;
    let user;

    try {
        user = await freelancer.findOne({ _id: id });
    } catch (err) {
        return res.status(400).json({
            message: "Error Return",
            err: err.message
        });
    }
    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    } else {
        return res.status(200).json({
            message: "Action Success",
            user
        });
    }
}
module.exports = {
    getAllFreelancer,
    newfreelancer,
    updateFreelancer,
    deleteFreelancer,
    singleApplied
};