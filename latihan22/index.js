const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const authRoutes = require('./src/routes/auth');
const blogRoutes = require('./src/routes/blog');

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Controll-Allow-Origin', '*');
    res.setHeader('Access-Controll-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Controll-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/v1/auth', authRoutes);
app.use('/v1/blog', blogRoutes);

app.listen(4000);