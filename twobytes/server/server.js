const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.post('/recipes', (req, res) => {
    var ingredients = req.body;
    console.log("Ingredients: " + ingredients);
    res.json("Server received ingredients");
});

app.listen(port, () => {
    console.log(`Server for recipe app started on port ${port}...`);
});
