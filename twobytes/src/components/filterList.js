import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class FilterList extends Component {

    onPress(id) {
        this.props.onDelete(id);
    }

    render() {
        return (
            <div className="FilterList">
                <ul>
                  {this.props.ingredients.map((ingredient) =>
                    <li><button>
                        {ingredient.name}
                        <FontAwesomeIcon icon="times" className="buttonx" onClick={this.onPress.bind(this, ingredient.id)}/>
                    </button></li>
                )}
                </ul>
            </div>
        );
    }
}

export default FilterList;
