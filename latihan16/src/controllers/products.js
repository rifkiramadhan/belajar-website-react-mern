exports.createProduct = (req, res, next) => {
    res.json(
        {
            message: 'Create Product Success',
            data: {
                id: 1,
                nama: 'Sari Gandum',
                price: 8000
            }
        }
    )
    next();
}

exports.getAllProducts = (req, res, next) => {
    res.json(
        {
            message: "Get All Products Success",
            data: [
                {
                    id: 1,
                    name: 'Sari Gandum',
                    price: 8000
                }
            ]
         }
    )
    next();
}