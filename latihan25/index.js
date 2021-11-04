const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const authRoutes = require('./src/routes/auth');
const blogRoutes = require('./src/routes/blog');
const mongoose = require('mongoose');

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Controll-Allow-Origin', '*');
    res.setHeader('Access-Controll-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Controll-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/v1/auth', authRoutes);
app.use('/v1/blog', blogRoutes);

app.use((error, req, res, next) => {
    const status = error.errorStatus || 500;
    const message = error.message;
    const data = error.data;

    res.status(status).json(
        {
            message: message,
            data: data
        }   
    );
})

mongoose.connect('mongodb+srv://rifki:0upDVQCI9k7HZghu@cluster0.gsjny.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() => {
    app.listen(4000, () => console.log('Connection Success'));
})
.catch(err => console.log(err))
