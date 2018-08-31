const fetch = require('node-fetch');

const appid = '80f786d2';
const appkey = '0342e14395706be2c68a8d5032a45ac5';

var ingredient = 'chicken'; //default ingredient to search with
var maxIngredients = '10';
var resultMin = '0';
var resultMax = '100';
var recipes = '';

var recipeMap = function (apiRes) {
    var recipes = apiRes.hits;
    var formatted = recipes.map( unformatted => {
        var obj = {};
        obj.name = unformatted.recipe.label;
        obj.servings = parseInt(unformatted.recipe.yield);
        obj.calories = parseInt(unformatted.recipe.calories);
        obj.timetocook = unformatted.recipe.totalTime;
        obj.ingredients = unformatted.recipe.ingredientLines;
        obj.health = unformatted.recipe.healthLabels;
        obj.url = unformatted.recipe.url;
        return obj;
    } );
    return formatted;
};

var hasWord = function(items, word) {
    let has = false;
    items.forEach( item => {
  	     if (item.includes(word)) {
             has = true;
         }
     });
     return (has ? true : false);
}

var recipeFilter = function (recipes, filters) {
    //Filter IN algorithm
    //Only one ingredient must be present
    var newRecipes = [];

    for (var i=0; i<filters.length; ++i) {
        for (var j=0; j<recipes.length; ++j) {
            if ( hasWord(recipes[j].ingredients, filters[i]) ) {
                newRecipes.push( recipes[j] );
                recipes.splice(j, 1);
            }
        }
    }

    return newRecipes;
}

var recipeFilterAggressive = function (recipes, filters) {
    //Filter OUT algorithm : very aggressive
    //All ingredients must be present
    for (var i=0; i<filters.length; ++i) {
        recipes = recipes.filter( recipe => hasWord(recipe.ingredients, filters[i]) );
    }
    return recipes;
}

var apiFetch = function(err, res, body) {
    recipes = body;
    console.log(recipes);
}

var getFromAPI = async function (ingredients) {
    //Search by main ingredient
    ingredient = ingredients[0];

    //Rest become filters
    filters = ingredients.slice(1);

    const url = `https://api.edamam.com/search?q=${ingredient}&app_id=${appid}&app_key=${appkey}&ingr=${maxIngredients}&from=${resultMin}&to=${resultMax}`;

    var res = await fetch(url);
    res = await res.json();

    //Map to format needed for frontend
    res = recipeMap(res);

    //Filter by ingredients, if more Ingredients
    //than just the main one provided
    (filters.length !== 0) && (res = recipeFilter(res, filters));

    console.log("searched: " + resultMax + " filtered down to: " + res.length)
    return res;
}

module.exports.getFromAPI = getFromAPI;
