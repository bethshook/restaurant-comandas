import React, { Component } from 'react';
import './App.css';

class MenuItem extends Component {
    constructor(props) {
        super(props);

        this.onAddToOrder = this.onAddToOrder.bind(this);
    }

    onAddToOrder() {
        const { onAddToOrder, name, price, qty} = this.props;
        onAddToOrder(name, price, qty);
    }

    render() {
        const { name, price } = this.props;

        return (
            <div>
                <p>{name} – ${price}
                    <button className="Add-btn" onClick={this.onAddToOrder}>Agregar</button></p>
            </div>
        );
    }
}

export default MenuItem;
