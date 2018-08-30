const request = require('request');

const appkey = '0342e14395706be2c68a8d5032a45ac5';
const appid = '80f786d2';

var ingredient = 'tofu';
var maxIngredients = '10';

var resultMin = '0';
var resultMax = '2';

const url = `https://api.edamam.com/search?q=${ingredient}&app_id=${appid}&app_key=${appkey}&ingr=${maxIngredients}&from=${resultMin}&to=${resultMax}`;

var recipes = 'old recipe';

var apiFetch = function(err, res, body) {
    recipes = body;
    console.log(recipes);
}

request(url, apiFetch);
