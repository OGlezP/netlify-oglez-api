const express = require("express");
const serverless = require("serverless-http");
const data =  require('./data.json');

const app = express();
const router = express.Router();


router.get('/', (req, res) => {
    res.send("hola");
})

router.get('/projects', (req, res) => {
    res.send(data);
})

app.use('/.Netlify/functions/api', router);



module.exports.handler = serverless(app);
