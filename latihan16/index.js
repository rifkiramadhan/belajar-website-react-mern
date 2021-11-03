const express = require('express');
const app = express();
const productRoutes = require('./src/routes/products');

app.use('/', productRoutes);

// GET '/users' => [{name: rifki}]


app.listen(4000);