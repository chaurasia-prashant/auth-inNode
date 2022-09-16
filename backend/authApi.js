const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

//import routes
const authRoute = require("./routes/userRegisteration");
const loginRoute = require("./routes/userLogin");

const app = express();

//setup port and middleware
const port = process.env.PORT || 6000;
app.use(cors());
app.use(express.json());

// Connect database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log(`Mogodb database connection establish successfylly`);
});



//Route middleware

app.use('/auth/user', authRoute, loginRoute);
// app.use('/auth/user', loginRoute);

app.listen(port, () => console.log("server is running on 5000"));