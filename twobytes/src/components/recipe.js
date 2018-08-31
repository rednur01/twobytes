import React, { Component } from 'react';
import HealthLabel from './healthLabel';

class Recipe extends Component {
    render() {
        return (
            <div className="Recipe">

                <div className="recipeheader">
                    <span className="recipename">{this.props.recipe.name}</span>
                    <span className="healthinfo"><ul>
                        {this.props.recipe.health.map((label) =>
                            <li><HealthLabel label={label} /></li>)}
                    </ul></span>
                </div>

                <div className="recipeinfo">
                    <span>{this.props.recipe.servings} Servings</span> |
                    <span>{this.props.recipe.calories} Calories</span> |
                    <span>{this.props.recipe.timetocook} Minutes Total Time</span>
                </div>

                <div className="ingredientlines">
                    {this.props.recipe.ingredients.map((ingredientline) => <p>{ingredientline}</p>)}
                    <a href={this.props.recipe.url} target="_blank">See Recipe</a>
                </div>
            </div>
        );
    }
}

export default Recipe;
