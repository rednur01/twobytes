import React, { Component } from 'react';
import shortid from 'shortid';
import SearchUI from './searchUI';
import SearchResults from './searchResults';

class Container extends Component {
    constructor() {
        super();
        this.onAdd = this.onAdd.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.state = {
            ingredients: [
                {
                    id: shortid.generate(),
                    name: 'chicken'
                },
                {
                    id: shortid.generate(),
                    name: 'pork'
                }
            ],
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
                    ]
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
                    ]
                }
            ]
        };
    }

    onAdd(item) {
        var ingredients = this.state.ingredients;
        ingredients.push({
            id: shortid.generate(),
            name: item
        });
        this.setState( {ingredients: ingredients} );
    }

    onDelete(id) {
        var ingredients = this.state.ingredients;
        ingredients = ingredients.filter( (item) => {
            return item.id !== id;
        });
        this.setState( {ingredients: ingredients} );
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
