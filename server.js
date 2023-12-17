//import pkgs
require('dotenv').config()
const dbConfig = require('./config/dbConfig')
const express = require('express')
const userRoute = require('./routes/userRoute')
const cors = require('cors')


//setting app to express
const app = express();

app.use(cors())

// taking everything into json format
app.use(express.json())

//we make the end point it will see user call for register or for login so it will give him 
app.use('/api/user', userRoute)











































const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`App is up with PORT:${PORT}`))