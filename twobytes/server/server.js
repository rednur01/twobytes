const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const recipes = require('./recipes');
const mysql = require('mysql');

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'BLotmj323',
    database: 'twobites'
});

connection.connect( (err) => {
    if (err) {
        console.log("Connection Error: " + err);
    } else {
        console.log("Connected to database");
    }
});

app.post('/recipes', async (req, res) => {
    var ingredients = req.body;
    console.log("Ingredients: " + ingredients);
    var results = await recipes.getFromAPI(ingredients)
    res.send( JSON.stringify(results) );
});

app.post('/favorite', async (req, res) => {
    //DB has 3 tables
    //favorites: starts with user, then has all fields in recipe object
    //except ingredients and health healthLabel
    //health: has recipe and label columns
    //ingredients: has recipe and ingredient columns
    var user = req.body.user;
    var recipe = req.body.recipe;

    //Add recipe
    var addRecipe = `INSERT INTO favorites VALUES
    ("${user}", "${recipe.name}", ${recipe.servings}, ${recipe.calories}, ${recipe.timetocook}, "${recipe.url}")`;
    connection.query(addRecipe, (err, rows, fields) => {
        if (err) {
            res.send("Recipe add failed");
        } else {
            res.send("Favorites stored");
        }
    });

    //Add ingredients
    recipe.ingredients.forEach( ingredient => {
        connection.query(`INSERT INTO ingredients VALUES ("${recipe.name}", "${ingredient}")`, (err) => {
            if (err) {
                console.log("Ingredient add failed");
            }
        });
    });

    //Add health labels
    recipe.health.forEach( label => {
        connection.query(`INSERT INTO health VALUES ("${recipe.name}", "${label}")`, (err) => {
            if (err) {
                console.log("Health label add failed");
            }
        });
    });
});

app.get('/favorites', (req, res) => {
    var user = req.query.user;
    var recipes = [];
    var singleRecipe;

    var getRecipe = `SELECT recipe, servings, calories, timetocook, url FROM favorites WHERE user="${user}"`;
    connection.query(getRecipe, (err, rows, fields) => {
        var count = rows.length;
        rows.forEach( row => {
            singleRecipe = {
                name: '',
                servings: 0,
                calories: 0,
                timetocook: 0,
                url: '',
                ingredients: [],
                health: []
            };
            singleRecipe.name = row.recipe;
            singleRecipe.servings = row.servings;
            singleRecipe.calories = row.calories;
            singleRecipe.timetocook = row.timetocook;
            singleRecipe.url = row.url;

            recipes.push(singleRecipe);
        });

        recipes.forEach( recipe => {
            let name = recipe.name;

            connection.query(`SELECT ingredient FROM ingredients WHERE recipe="${name}"`, (err, rows, fields) => {
                rows.forEach( row => {
                    recipe.ingredients.push(row.ingredient);
                });

                connection.query(`SELECT label FROM health WHERE recipe="${name}"`, (err, rows, fields) => {
                    rows.forEach( row => {
                        recipe.health.push(row.label);
                    });
                    count--;
                    count===0 && res.send(recipes);
                });
            });
        });
    });
})

app.listen(port, () => {
    console.log(`Server for recipe app started on port ${port}...`);
});
