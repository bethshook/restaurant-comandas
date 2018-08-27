import React, { Component } from 'react';
import './App.css';

import MenuItem from './MenuItem';
import OrderItem from './OrderItem';

const orderItems = [];

const items = [
    {
        name: 'Bistec',
        price: 20,
        qty: 1
    },
    {
        name: 'Costilla',
        price: 20,
        qty: 1
    },
    {
        name: 'Chuleta',
        price: 20,
        qty: 1
    },
    {
        name: 'Gaona\'s',
        price: 30,
        qty: 1
    },
    {
        name: 'Rib-Eye',
        price: 30,
        qty: 1
    },
    {
        name: 'Pechuga',
        price: 30,
        qty: 1
    },
    {
        name: 'Campechano',
        price: 30,
        qty: 1
    },
    {
        name: 'Pastor',
        price: 30,
        qty: 1
    },
    {
        name: 'Gringa',
        price: 30,
        qty: 1
    },
    {
        name: 'Barbacoa',
        price: 30,
        qty: 1
    }
    ];

localStorage.setItem('items', JSON.stringify(items));
localStorage.setItem('orderItems', JSON.stringify(orderItems));

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: JSON.parse(localStorage.getItem('items')),
            orderItems: JSON.parse(localStorage.getItem('orderItems'))
        };

        // this.onAdd = this.onAdd.bind(this);
        this.onAddToOrder = this.onAddToOrder.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    componentWillMount() {
        const items = this.getMenu();
        const orderItems = this.getOrder();
        this.setState({ items,orderItems });
    }

    getMenu() {
       return this.state.items;
    }

    getOrder() {
        return this.state.orderItems;
    }

    compare(obj,arr) {
        for (let i=0; i<arr.length; i++) {
            if (arr[i].name === obj.name) {
                arr[i].qty++;
                return true;
            }
        }
    }

    onAddToOrder(name,price,qty){
        const orderItems = this.getOrder();
        const newItem = {name, price, qty};

        if(!this.compare(newItem,orderItems)) {
            orderItems.push(newItem);
        }

        this.setState( {orderItems} )
    }

    // onAdd(name,price){
    //     const items = this.getMenu();
    //
    //     items.push({
    //         name,
    //         price
    //     })
    //
    //     this.setState({ items })
    // }

    onDelete(name) {
        const orderItems = this.getOrder();
        const currentOrder = orderItems.filter(orderItem => {
            return orderItem.name !== name;
        });

        this.setState({ orderItems: currentOrder });
    }

  render() {
    return (
      <div className="App">
        <h1>El Califa App</h1>
          <div className="Flex-wrap">
          <div className="Menu-widget">
              <h3>Menú</h3>
              {
                  this.state.items.map(item => {
                      return (
                          <MenuItem
                              key={item.name}
                              {...item}
                              onAddToOrder={this.onAddToOrder}
                          />
                      )
                  })
              }
          </div>
          {/*<AddItem*/}
            {/*onAdd={this.onAdd}*/}
          {/*/>*/}
          <div className="Comanda-widget">
          <h3>Detalles de Comanda</h3>
          {
              this.state.orderItems.map(orderItem => {
                  return (
                      <OrderItem
                          key={orderItem.name}
                          {...orderItem}
                          onDelete={this.onDelete}
                      />
                  )
              })
          }
          </div>
          </div>
      </div>
    );
  }
}

export default App;
