import React, { Component } from 'react';
import shortid from 'shortid';
import SearchUI from './searchUI';
import SearchResults from './searchResults';

class Container extends Component {
    constructor() {
        super();
        this.onAdd = this.onAdd.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.getRecipes = this.getRecipes.bind(this);
        this.state = {
            ingredients: [],
            recipes: [
                {
                    name: 'Buffalo Wings',
                    servings: 2,
                    calories: 255,
                    timetocook: 25,
                    ingredients: [
                        'chicken wings',
                        'buffalo sauce'
                    ],
                    health: [
                        'Vegeterian',
                        'Peanut',
                        'Dairy'
                    ],
                    url: "www.google.com"
                },
                {
                    name: 'Banana Smoothie',
                    servings: 2,
                    calories: 160,
                    timetocook: 10,
                    ingredients: [
                        'banana',
                        'milk',
                        'yoghurt'
                    ],
                    health: [
                        'Vegan',
                        'Dairy',
                        'Gluten'
                    ],
                    url: "www.mozilla.com"
                }
            ]
        };
    }

    onAdd(items) {
        var ingredients = this.state.ingredients;
        var ingredientNames = ingredients.map(ingredient => ingredient.name);

        items = items.split(',');
        items = items.map( item => item.trim().toLowerCase() );

        items.forEach( item => {
            item !== "" &&
            ingredientNames.includes(item) === false &&
            ingredients.push({
                id: shortid.generate(),
                name: item
            });
        });

        this.setState( {ingredients: ingredients}, this.getRecipes );
    }

    onDelete(id) {
        var ingredients = this.state.ingredients;
        ingredients = ingredients.filter( (item) => {
            return item.id !== id;
        });
        this.setState( {ingredients: ingredients}, this.getRecipes );
    }

    async getRecipes() {
        var ingredients = this.state.ingredients.map( ingredient => ingredient.name );
        var res = await fetch("http://localhost:5000/recipes", {
            method: "POST",
            mode: "cors",
            headers: {"Content-Type": "application/json; charset=utf-8"},
            body: JSON.stringify(ingredients)
        });
        res = await res.json();
        this.setState({recipes: res});
        console.log(res);
    }

    render() {
        return (
            <div className="Container">
                <SearchUI ingredients={this.state.ingredients} onAdd={this.onAdd} onDelete={this.onDelete}/>
                <SearchResults recipes={this.state.recipes} />
            </div>
        );
  }
}

export default Container;
