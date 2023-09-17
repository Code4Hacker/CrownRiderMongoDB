const express = require("express");
const mongoose = require("mongoose");
const { freelancerRoute } = require("./routers/freelancer-router");

const app = express();
const date = new Date().toDateString();
app.use(express.json());
app.use("/api/freelancer", freelancerRoute);

mongoose.connect("mongodb://127.0.0.1:27017/crownrider").then((response) => {
    app.listen(4000); 
    console.log(`### [ GEMINI LISTENING { ${date} } ... ] ###`);
}).catch((error) => console.log(error));

