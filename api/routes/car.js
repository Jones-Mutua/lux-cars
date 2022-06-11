
const router = require('express').Router();
const Car = require('../models/car');
const multer = require("multer");
const path = require('path');
const { v4: uniqueID } = require('uuid');



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + uniqueID() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });


//add product
router.post("/", upload.single("thumbnailSrc"), async (req, res) => {
    const { name, mileage, dailyPrice, monthlyPrice, gas, gearType} = req.body;
console.log(req.file)
    try{
        const newCar = await Car.create({
            name,
            mileage,
            dailyPrice,
            monthlyPrice,
            gas,
            gearType,
            thumbnailSrc: `http://localhost:${process.env.PORT || 2500}/uploads/` + req.file.filename,
        });
        return res.status(200).json(newCar);
    }catch (error) {
        res.status(500).json(error);
    }

});



//view product client

router.get("/", async (req,res) => {
    try {
        const cars = await Car.find({}).exec();
        return res.status(200).json(cars);
    }catch(error) {
        return res.status(500).json({message: "cars not found"})
    }
});



module.exports = router;

// Router.post('/car', async (req, res) => {
//     console.log(req.body)
//     try {
//       const addCar = await Car.find({car: req.body.car});
//       if (addCar) {
//         return res.status(403).json({success:false, message: "object"})
//       }
      
//         const newCar = await Car.create({
//         name: req.body.name,
//         mileage: req.body.mileage,
//         dailyPrice: req.body.dailyPrice,
//         monthlyPrice: req.body.monthlyPrice,
//         thumbnailSrc:req.body.thumbnailSrc,
//         gas: req.body.gas,
//         gearType: req.body.gearType,
    
//       });
  
//     } catch (error) {
//       res.status(500).json({
//         success: false,
//         data: error,
//       })
//     }
//   });