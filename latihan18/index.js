const express = require('express');
const app = express();
const productRoutes = require('./src/routes/products');

app.use((req, res, next) => {
    res.setHeader('Access-Controll-Allow-Origin', '*');
    res.setHeader('Access-Controll-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Controll-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/v1/customer', productRoutes);

app.listen(4000);