const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

//import routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/private")

const app = express();

//setup port and middleware
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// Connect database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log(`Mogodb database connection establish successfylly`);
});



//Route middleware

app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(port, () => console.log("server is running on 5000"));