import React, { Component } from 'react';
import './App.css';

import MenuItem from './MenuItem';

const items = [
    {
        name: 'Bistec',
        price: 20
    },
    {
        name: 'Costilla',
        price: 20
    },
    {
        name: 'Chuleta',
        price: 20
    },
    {
        name: 'Gaona\'s',
        price: 30
    },
    {
        name: 'Rib-Eye',
        price: 30
    },
    {
        name: 'Pechuga',
        price: 30
    },
    {
        name: 'Campechano',
        price: 30
    },
    {
        name: 'Pastor',
        price: 30
    },
    {
        name: 'Gringa',
        price: 30
    },
    {
        name: 'Barbacoa',
        price: 30
    }
    ];

localStorage.setItem('items', JSON.stringify(items));

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: JSON.parse(localStorage.getItem('items'))
        };

        this.onDelete = this.onDelete.bind(this);
    }

    componentWillMount() {
        const items = this.getMenu();

        this.setState({ items });
    }

    getMenu() {
       return this.state.items;
    }

    onDelete(name) {
        const items = this.getMenu();
        const filteredItems = items.filter(item => {
            return item.name !== name;
        });

        this.setState({ items: filteredItems });
    }

  render() {
    return (
      <div className="App">
        <h1>El Califa - Comandas</h1>
          {
              this.state.items.map(item => {
                  return (
                      <MenuItem
                          key={item.name}
                          {...item}
                          onDelete={this.onDelete}
                      />
                  )
              })
          }
      </div>
    );
  }
}

export default App;
