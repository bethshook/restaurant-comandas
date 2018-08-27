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
        const { name, price, qty } = this.props;

        return (
            <div>
                <p>{name} – ${price} ({qty})
                    <button onClick={this.onDelete}>Borrar</button></p>
            </div>
        );
    }
}

export default MenuItem;
