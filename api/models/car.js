const mongoose = require("mongoose");


const CarSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, unique: true},
        
        dailyPrice: {type: Number, required: true},
        gas: {type: String, required: true},
        monthlyPrice: {type: Number, required: true},
        mileage: {type: Number, required: true},
        gearType: {type: String, required: true},
        thumbnailSrc: {type: String,  unique: true},



    },
    {timestamps: true}
);
    module.exports = mongoose.model("Car", CarSchema);
