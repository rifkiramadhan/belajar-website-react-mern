const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const productRoutes = require('./src/routes/products');
const authRoutes = require('./src/routes/auth');

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Controll-Allow-Origin', '*');
    res.setHeader('Access-Controll-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Controll-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/v1/customer', productRoutes);
app.use('/v1/auth', authRoutes);

app.listen(4000);