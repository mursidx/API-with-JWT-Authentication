const express = require('express');
const app = express();
require('dotenv').config();
const debuglog = require('debug')('development:app');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes')

const connectDb = require('./config/mongoose-connection');
connectDb();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())


app.use('/api/auth', authRoutes);

app.listen(3000)