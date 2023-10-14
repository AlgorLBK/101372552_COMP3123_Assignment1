const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require("./routes/userRoutes")
const employeeRoutes = require("./routes/employeeRoutes")

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/api/v1/user", userRoutes)
app.use("/api/v1/emp/employees", employeeRoutes)

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://algor:algor123@cluster0.yfkbyo7.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});