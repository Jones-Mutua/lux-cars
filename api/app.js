const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const PORT = process.env.PORT || 2500;
const app = express();
const morgan = require("morgan");
const cors = require('cors');
const authRoutes = require("./routes/auth");
const carRoutes = require('./routes/car')

mongoose.connect(process.env.MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then(() => {
  console.log("Connected to Database")
}).catch((error) => {
  console.log(error);
})


app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use('/api/car', carRoutes);

app.use(express.static(__dirname + '/public'));
app.use("/uploads", express.static("uploads"));


app.listen(PORT, () => {
  console.log('Server RUNNING');
})