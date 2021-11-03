const express = require('express');
const app = express();
const router = express.Router();

router.use('/products', (req, res, next) => {
    res.json({
        name: "Rifki Ramadhan",
        email: "riifkiramadhan2@gmail.com"
    })
    next();
})
router.use('/price', (req, res, next) => {
    res.json({
        price: 30000000
    })
    next();
})

router.delete('/customers', (req, res, next) => {
    res.json({
        title: "Customers"
    })
    next();
})

app.use('/', router);

// GET '/users' => [{name: rifki}]


app.listen(4000);