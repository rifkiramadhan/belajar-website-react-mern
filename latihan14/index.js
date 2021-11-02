const express = require('express');
const app = express();

app.use(() => {
    console.log('Hello Server');
    console.log('Hello Lagi');
    console.log('Hello Lagi dan Lagi');
})

app.listen(4000);