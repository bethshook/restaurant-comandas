import React, { Component } from 'react';
import './App.css';

class MenuItem extends Component {
    constructor(props) {
        super(props);

        this.onDelete = this.onDelete.bind(this);
    }

    onDelete() {
        const { onDelete, name} = this.props;
        onDelete(name);
    }

    render() {
        const { name, price } = this.props;

        return (
            <div>
                <span>{name}</span>
                {` | `}
                <span>${price}</span>
                {` | `}
                <button onClick={this.onDelete}>Borrar</button>
            </div>
        );
    }
}

export default MenuItem;
