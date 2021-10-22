const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get('/calculator', (req, res) => {
    res.sendFile(__dirname+'/index.html');
});

app.post('/calculator', (req, res) => {
    let n1 = Number(req.body.v1);
    let n2 = Number(req.body.v2);
    let sum = n1 + n2;
    res.send("The sum is: "+sum);
});

app.listen(3000, (req, res) => {
    console.log('The server is running on port number 3000');
});