const express = require("express");
const multer = require("multer");
const { getAllFreelancer, newfreelancer, updateFreelancer, deleteFreelancer, singleApplied } = require("../controllers/freelancer-controllers");
const path = require("path");
const freelancerRoute = express.Router();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        try {
            if (file.fieldname === "certificate") {
                cb(null, "Certificates");
            } else if (file.fieldname === "cv") {
                cb(null, "Carriculums");
            } else if(file.fieldname === "face_pic"){
                cb(null, "Profiles");
            }
        } catch (err) {
            console.log(err);
        }
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '_' + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

freelancerRoute.get("/", getAllFreelancer);
freelancerRoute.post("/register", upload.fields([{ name: "certificate", maxCount: 1 }, { name: "cv", maxCount: 1 },{ name: "face_pic", maxCount: 1 }]), newfreelancer);
freelancerRoute.patch("/reflush/:theid", updateFreelancer);
freelancerRoute.delete("/flush_/:lancerid", deleteFreelancer);
freelancerRoute.get("/single_applied/:applier", singleApplied);

module.exports = {
    freelancerRoute,
    storage
};